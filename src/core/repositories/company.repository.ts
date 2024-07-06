import { Company } from "../domain/Entities/Company";
import Repository from "../base/repository";

export default abstract class CompanyRepository extends Repository<Company> {}