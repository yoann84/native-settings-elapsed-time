package com.yourpackage.elapsedtime

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class NativeSettingsElapsedTimeModule : Module() {
    override fun definition() = ModuleDefinition {
        Name("NativeSettingsElapsedTime")

        Function("getElapsedTimeMillis") {
            android.os.SystemClock.elapsedRealtime()
        }
    }
}