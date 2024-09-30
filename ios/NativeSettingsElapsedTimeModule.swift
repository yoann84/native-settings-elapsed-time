import ExpoModulesCore

public class NativeSettingsElapsedTimeModule: Module {
    public func definition() -> ModuleDefinition {
        Name("NativeSettingsElapsedTime")

        Function("getElapsedTimeMillis") { () -> Double in
            let nanoseconds = clock_gettime_nsec_np(CLOCK_MONOTONIC_RAW)
            return Double(nanoseconds) / 1_000_000.0
        }
    }
}