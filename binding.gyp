{
    "libraries": ["-lpthread"],
    "targets": [
        {
            "target_name" : "yapcduino",
            "sources" : [
                "./src/yapcduino.cpp",
                "./src/softpwm.c",
                "./src/arduino/wiring.c",
                "./src/arduino/wiring_digital.c",
                "./src/arduino/wiring_pulse.c",
                "./src/arduino/platform.c",
                "./src/arduino/wiring_shift.c",
                "./src/arduino/wiring_analog.c"
            ],
            "include_dirs" : [
                "<!(node -e \"require('nan')\")"
            ],
            "cflags": ["-w", "-O2"],
        }
    ]
}
