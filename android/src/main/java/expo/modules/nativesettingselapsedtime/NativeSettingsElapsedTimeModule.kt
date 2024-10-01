package expo.modules.nativesettings

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import android.os.SystemClock

class NativeSettingsElapsedTimeModule : Module() {
    override fun definition() = ModuleDefinition {
        Name("NativeSettingsElapsedTime")

        Function("getElapsedTimeMillis") {
            return@Function SystemClock.elapsedRealtime()
        }
    }
}