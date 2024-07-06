import { Observable } from "rxjs";
import { Company } from "../../core/domain/Entities/Company";
import CompanyRepository from "../../core/repositories/company.repository";

export class CompanyRemoteRepository implements CompanyRepository {
    getAll(): Observable<Company[]> {
        throw new Error("Method not implemented.");
    }
    getById(id: string): Observable<Company> {
        throw new Error("Method not implemented.");
    }
    create(data: Company): Observable<Company> {
        throw new Error("Method not implemented.");
    }
    update(id: Number, data: Company): Observable<Company> {
        throw new Error("Method not implemented.");
    }
    delete(id: Number): Observable<void> {
        throw new Error("Method not implemented.");
    }

}