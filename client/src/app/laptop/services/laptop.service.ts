import { Injectable } from '@angular/core';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiResponse, Laptop } from '../interfaces/laptop.interface';

@Injectable({
  providedIn: 'root'
})
export class LaptopService {
  laptopQuery!: QueryRef<ApiResponse>;

  constructor(private apollo: Apollo) { }

  refresh() {
    this.laptopQuery.refetch();
  }

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

  getLaptops(): Observable<ApiResponse> {
    const GET_LAPTOPS = `
      {
        laptops {
          id
          brand
          model
          price
          size
          specs
          imageUrl
        }
      }
    `;

    this.laptopQuery = this.apollo.watchQuery<ApiResponse>({
        query: gql(GET_LAPTOPS)
    });

    return this.laptopQuery
    .valueChanges.pipe(
      map((response) => response.data)
    );
  }

  getLaptop(id: string): Observable<ApiResponse> {
    const GET_LAPTOP = `
      query GetLaptop($id: String!) {
        laptop (id: $id) {
          id
          brand
          model
          price
          size
          specs
          imageUrl
        }
      }
    `;

    return this.apollo.watchQuery<ApiResponse>({
      query: gql(GET_LAPTOP),
      variables: {
        id: id
      }
    })
    .valueChanges.pipe(
      map((response) => response.data)
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

  deleteLaptop(id: string): Observable<Laptop> {
    const DELETE_LAPTOP = `
      mutation DeleteLaptop($id: String!){
        deleteLaptop(id: $id){
          id
          brand
          model
          price
          size
          specs
          imageUrl
        }
      }
    `;

    return this.apollo.mutate<any>({
      mutation: gql(DELETE_LAPTOP),
      variables: {
        id: id
      }
    }).pipe(
      map(response => response.data.deleteLaptop)
    );
  }
}
