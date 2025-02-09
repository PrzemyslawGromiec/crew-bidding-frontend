export class PeriodType {
  static WORK = 'work';
  static OFF = 'off';
  static NOT_DEFINED = 'not defined period type'

  static getClass(periodType){
    switch (periodType){
      case this.WORK:
        return "work";
      case this.OFF:
        return "off";
    }
  }

  static getAll() {
    return [this.WORK,this.OFF]
  }

}
