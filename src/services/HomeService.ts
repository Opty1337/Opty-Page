const BIRTHDATE = new Date(1999, 3, 7);

export default class HomeService {
  static get currAge(): number {
    const currDate = new Date();
    const diffYear = currDate.getFullYear() - BIRTHDATE.getFullYear();
    const diffMonth = currDate.getMonth() - BIRTHDATE.getMonth();
    const diffDay = currDate.getDate() - BIRTHDATE.getDate();
    return diffMonth < 0 || (diffMonth === 0 && diffDay < 0)
      ? diffYear - 1
      : diffYear;
  }
}
