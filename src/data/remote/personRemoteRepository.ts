import { Observable } from "rxjs";
import { Person } from "../../core/domain/Entities/Person";
import PersonRepository from "../../core/repositories/person.repository";

export class PersonRemoteRepository implements PersonRepository {
    getAll(): Observable<Person[]> {
        throw new Error("Method not implemented.");
    }
    getById(id: string): Observable<Person> {
        throw new Error("Method not implemented.");
    }
    create(data: Person): Observable<Person> {
        throw new Error("Method not implemented.");
    }
    update(id: Number, data: Person): Observable<Person> {
        throw new Error("Method not implemented.");
    }
    delete(id: Number): Observable<void> {
        throw new Error("Method not implemented.");
    }

}