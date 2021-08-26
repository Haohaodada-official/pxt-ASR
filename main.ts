

//% weight=10 color=#FF6600 icon="\uf130" block="语音识别"

namespace ASR {

    const PortSerial = [
        SerialPin.P0,
        SerialPin.P1,
        SerialPin.P2,
        SerialPin.P8,
        SerialPin.P12,
        SerialPin.P16,
    ]

    export enum Ports {
        P0 = 0,
        P1 = 1,
        P2 = 2,
        P8 = 3,
        P12 = 4,
        P16 = 5

    }

    //% weight=40
    //% blockId=ASR_setup block="asr setup at pin|%port"
    export function setup(port: Ports): void {
        
        if(port != 1){
            serial.redirect(
                SerialPin.P1,
                PortSerial[port],
                BaudRate.BaudRate115200
            ) 
        }else {
            serial.redirect(
                SerialPin.P0,
                SerialPin.P1,
                BaudRate.BaudRate115200
            )
        }

    }

    //% weight=40
    //% blockId=ASR_read block="asr read"
    //% blockSetVariable=ID
    export function read(): number{
        let value = serial.readString()
        if (value != "") {
            for (let i = 0; i <= 255; i++) {
                if (value == String.fromCharCode(i)) {
                    return i
                }
            }
        }
        return -1
    }

}