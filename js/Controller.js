import {Calendar} from "./Calendar";
import {displayFlightsForPeriod} from './flight-card';
import {FlightBar} from "./FlightBar";
import { getFlights } from './api.js';

export class Controller {

  static instance = new Controller()

  constructor() {
    if (Controller.instance) {
      throw new Error("Instance already created")
    }
    this.flightBar = new FlightBar()
    getFlights().then(data =>  {
      console.log('bla')
      this.flightBar.allFlightsData = data
      this.flightBar.showAllFlights()
      console.log(data)
    })
  }

  start() {
    this.calendar = new Calendar();
    this.calendar.init();
    this.attachListeners();
  }

  attachListeners() {
    const days = this.calendar.getDays();
    for (const day of days) {
      day.element.addEventListener('mouseenter', () => {
        this.calendar.hoverEnter(day);
      });

      day.element.addEventListener('mouseleave', () => {
        this.calendar.hoverLeave(day);
      });
    }

    document.addEventListener('mouseup', () => {
      if (this.calendar.isSelecting()) {
        const success = this.calendar.finishSelection();
        if (!success) {
          console.log('Okresy się nakładają.');
        }
      }
    });
  }

  addSelectionIconAction(activeIcons) {
    for (const icon of activeIcons) {
      icon.element.addEventListener('mousedown', () => {
        this.calendar.selectBy(icon.day,icon.type);
        icon.day.removeIcons()
      });
    }
  }

  addTrashIconAction(trashIcon) {
      trashIcon.element.addEventListener('mousedown', () => {
        this.calendar.deleteDutyBy(trashIcon.day);
        trashIcon.day.removeIcons()
      });
  }


  showFlights(dates) {
    // const flights = api.getFlightsForMonth();
    this.flightBar.showFlightsForPeriod(dates)
  }
}
