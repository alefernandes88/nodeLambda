import Repository from "../base/repository";
import { Person } from "../domain/Entities/Person";

export default abstract class PersonRepository extends Repository<Person> {}