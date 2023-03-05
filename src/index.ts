export class Log {
    static danger(msg: string) {
        console.log(`%c${msg}`, 'color: #F20A34');
    }
    static bgDanger(msg: string) {
        console.log(`%c${msg}`, 'background: #F20A34');
    }
    static success(msg: string) {
        console.log(`%c${msg}`, 'color: #31E635');
    }
    static bgSucess(msg: string) {
        console.log(`%c${msg}`, 'background: #31E635; color: #000000');
    }
    static warning(msg: string) {
        console.log(`%c${msg}`, 'color: #cc3300');
    }
    static bgWarning(msg: string) {
        console.log(`%c${msg}`, 'background: #cc3300; color: #ffffff');
    }
}