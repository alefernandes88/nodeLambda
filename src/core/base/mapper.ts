export abstract class Mapper<F,T>{
    abstract mapFrom(data: F): T;
    abstract mapTo(data: T): F;
}