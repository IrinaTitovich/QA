export interface IQuestion{
  title:string,
  content:string,
  author?:string,
  rate:string | null,
  dateOfCreation?:Date,
  dateOfUpdate?:Date,
  tags?:string[],
}
export interface IDatabase{
  url:string,
  method:string,
  body?:IQuestion,
}