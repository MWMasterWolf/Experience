import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Laptop } from '../interfaces/laptop.interface';

@Injectable({
  providedIn: 'root'
})
export class LaptopService {

  constructor(private apollo: Apollo) { }

  getIntrospection(): any {
    const GET_INTROSPECTION = `
      {
        __type(name: "LaptopType"){
          fields{
            name
          }
        }
      }
    `;

    return this.apollo.watchQuery<any>({
      query: gql(GET_INTROSPECTION)
    })
    .valueChanges.pipe(
      map(response => response.data.__type.fields)
    );
  }

  createLaptop(formData: any): Observable<Laptop> {
    const CREATE_LAPTOP = `
      mutation CreateLaptop(
        $brand: String!
        $model: String!
        $price: Int!
        $size: String!
        $specs: String!
        $imageUrl: String!
      ) {
        createLaptop(
          input: {
            brand: $brand
            model: $model
            price: $price
            size: $size
            specs: $specs
            imageUrl: $imageUrl
          }
        ) {
          id
        }
      }
    `;

    return this.apollo.mutate<any>({
      mutation: gql(CREATE_LAPTOP),
      variables: {
        brand: formData.brand.value,
        model: formData.model.value,
        price: parseInt(formData.price.value),
        size: formData.size.value,
        specs: formData.specs.value,
        imageUrl: formData.imageUrl.value
      }
    }).pipe(
      map(response => response.data.createLaptop)
    );
  }
}
