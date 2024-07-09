import { Observable } from 'rxjs'

export default abstract class Repository<E> {
    abstract getAll(): Observable<E[]>;
    abstract getById(id: Number): Observable<E>; 
    abstract create(data: E): Observable<E>;
    abstract update(id: Number, data: E): Observable<void>;
    abstract delete(id: Number): Observable<void>;
}