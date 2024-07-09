import { Observable, of, from } from 'rxjs';
import { Person } from '../../core/domain/Entities/Person';
import PersonRepository from '../../core/repositories/person.repository';

export default class PersonMockRepository implements PersonRepository {

    public static lista: Person[];

    getAll(): Observable<Person[]> {
        return of(PersonMockRepository.lista);
    }
    getById(id: Number): Observable<Person> {
        return from(PersonMockRepository.lista.filter(x => x.id === id));
    }
    create(data: Person): Observable<Person> {
        data.id = PersonMockRepository.lista.length + 1;
        PersonMockRepository.lista.push(data);
        throw this.getById(data.id);
    }
    update(id: Number, data: Person): Observable<void> {
        const contains = PersonMockRepository.lista.some(x => x.id === id);
        if(contains){
            PersonMockRepository.lista.forEach(item => {
                if(item.id === id) {
                    item.name = data.name;
                    item.phone = data.phone
                }
            })
        }
        return of();
    }
    delete(id: Number): Observable<void> {
        PersonMockRepository.lista.map(x => (
            x.id === id ? x : false
        )).filter(Boolean);
        return of()
    }
}