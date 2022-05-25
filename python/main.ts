
//% color="#5867d6" iconWidth=50 iconHeight=40
namespace DFR0231_pinpong_nfc{


    //% block="初始化NFC模块直到成功 接口I2C 地址0x24" blockType="command"
    export function initnfc(parameter: any, block: any) {
        
        
        Generator.addImport("from pinpong.libs.dfrobot_pn532 import PN532_I2C")
        
        Generator.addCode("nfc = PN532_I2C()")

        Generator.addCode(`while not nfc.begin():
    pass`)

    }

    //% block="检测到卡片？" blockType="boolean"
    export function available(parameter: any, block: any) {
        Generator.addCode(`nfc.scan()`)
        
    }


/*
    //% block="检测到卡片 UID：[UID]？" blockType="boolean"
    //% UID.shadow="string" UID.defl="4978ef9c" 
    export function availableUID(parameter: any, block: any) {
        

    }
*/
    //% block="读取一次NFC模块所有数据" blockType="command"
    export function readalldata(parameter: any, block: any) {
        Generator.addCode(`info = nfc.get_information()`)
    }

    //% block="数据不为空？" blockType="boolean"
    export function datanotnone(parameter: any, block: any) {
        Generator.addCode(`info !=None`)
        
    }

    //% block="从结果中取UID(string)" blockType="reporter"
    export function readUID(parameter: any, block: any) {
        Generator.addDeclaration("readuid",`def nfc_get_uid_to_str(info):
    if info == None:
        return 'None'
    uidstr=""
    for i in range(info.length):
        uidstr=uidstr+hex(info.uid[i]).replace('0x' , '')
    return uidstr`)
    
        Generator.addCode(`nfc_get_uid_to_str(info)`)

        

    }
/*
    //% block="读取NFC模块 数据块[NUM]所有数据(string)" blockType="reporter"
    //% NUM.shadow="range" NUM.params.min=1    NUM.params.max=62    NUM.defl=1
    export function readall(parameter: any, block: any) {
 

    }

    
    //% block="读取NFC模块 数据块[NUM]第[BYTE]字节(number)" blockType="reporter"
    //% NUM.shadow="range" NUM.params.min=1    NUM.params.max=62    NUM.defl=1
    //% BYTE.shadow="range" BYTE.params.min=1    BYTE.params.max=16    BYTE.defl=1
    export function readbyte(parameter: any, block: any) {
 

    }

    //% block="NFC模块 数据块[NUM]第[BYTE]字节写入[VAL]" blockType="reporter"
    //% NUM.shadow="range" NUM.params.min=1    NUM.params.max=62    NUM.defl=1
    //% BYTE.shadow="range" BYTE.params.min=1    BYTE.params.max=16    BYTE.defl=1
    //% VAL.shadow="number" VAL.defl=200
    export function write(parameter: any, block: any) {
 

    }
*/

    function replaceQuotationMarks(str:string){
            str=str.replace(/"/g, ""); //去除所有引号
            return str
    }


    
}
