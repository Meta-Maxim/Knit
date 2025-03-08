return function(controllers: { [string]: { Name: string, [string]: any } })
	local knitStarted = false
	local initPhaseCompleted = Instance.new("BindableEvent")
	local startPhaseCompleted = Instance.new("BindableEvent")

	initPhaseCompleted.Event:Connect(function()
		for _, controller in controllers do
			if type(controller.KnitStart) == "function" then
				task.spawn(function()
					debug.setmemorycategory(controller.Name)
					controller:KnitStart()
				end)
			end
		end

		knitStarted = true
		startPhaseCompleted:Fire()
	end)

	local controllersToInit = 0
	for _, controller in controllers do
		if type(controller.KnitInit) == "function" then
			controllersToInit += 1
		end
	end

	for _, controller in controllers do
		if type(controller.KnitInit) == "function" then
			local initialized = false
			local initThread = task.spawn(function()
				debug.setmemorycategory(controller.Name)
				controller:KnitInit()
				controllersToInit -= 1
				if controllersToInit == 0 then
					initPhaseCompleted:Fire()
				end
				initialized = true
			end)
			task.defer(function()
				if not initialized and coroutine.status(initThread) ~= "dead" then
					warn("[ Knit ]: Controller is yielding on init: " .. controller.Name)
				end
			end)
			task.delay(1, function()
				if not initialized and coroutine.status(initThread) ~= "dead" then
					warn("[ Knit ]: Controller is taking >1s to initialize: " .. controller.Name)
				end
			end)
		end
	end

	task.delay(1, function()
		if controllersToInit > 0 then
			initPhaseCompleted:Fire()
		end
	end)

	if not knitStarted then
		startPhaseCompleted.Event:Wait()
	end
end
