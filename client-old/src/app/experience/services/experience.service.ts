import { Injectable } from '@angular/core';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { ApolloQueryResult } from '@apollo/client/core';

import { take, tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { ApiResponse, Experience } from '../interfaces/experience.interface';


@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  experienceQuery!: QueryRef<ApiResponse>;

  constructor(private apollo: Apollo) { }

  refresh() {
    this.experienceQuery.refetch();
  }

  getExperiences(): Observable<ApiResponse> {
    const GET_EXPERIENCES = `
      {
        experiences {
          id
          title
          description
          content
          imageUrl
          createdBy
          createdAt
        }
      }
    `;

    this.experienceQuery = this.apollo.watchQuery<ApiResponse>({
        query: gql(GET_EXPERIENCES)
    });

    return this.experienceQuery
    .valueChanges.pipe(
      map((response) => response.data)
    );
  }

  getExperience(id: string): Observable<ApiResponse> {
    const GET_EXPERIENCE = `
      query GetExperience($id: String!) {
        experience (id: $id) {
          id
          title
          description
          content
          imageUrl
          createdBy
          createdAt
        }
      }
    `;

    return this.apollo.watchQuery<ApiResponse>({
      query: gql(GET_EXPERIENCE),
      variables: {
        id: id
      }
    })
    .valueChanges.pipe(
      map((response) => response.data)
    );
  }

  createExperience(formData: any): Observable<Experience> {
    const CREATE_EXPERIENCE = `
      mutation CreateExperience(
        $title: String!
        $description: String!
        $content: String!
        $imageUrl: String!
        $createdBy: String!
      ) {
        createExperience(
          input: {
            title: $title
            description: $description
            content: $content
            imageUrl: $imageUrl
            createdBy: $createdBy
          }
        ) {
          id
        }
      }
    `;

    return this.apollo.mutate<any>({
      mutation: gql(CREATE_EXPERIENCE),
      variables: {
        title: formData.title.value,
        description: formData.description.value,
        content: formData.content.value,
        imageUrl: formData.imageUrl.value,
        createdBy: formData.createdBy.value
      }
    }).pipe(
      map(response => response.data.createExperience)
    );
  }

  updateExperience(id: string, formData: any): Observable<Experience> {
    const UPDATE_EXPERIENCE = `
      mutation UpdateExperience(
        $id: String!
        $title: String!
        $description: String!
        $content: String!
        $imageUrl: String!
        $createdBy: String!
      ) {
        updateExperience(
          id: $id
          input: {
            title: $title
            description: $description
            content: $content
            imageUrl: $imageUrl
            createdBy: $createdBy
          }
        ) {
          id
          title
          description
          content
          imageUrl
          createdBy
        }
      }
    `;

    return this.apollo.mutate<any>({
      mutation: gql(UPDATE_EXPERIENCE),
      variables: {
        id: id,
        title: formData.title.value,
        description: formData.description.value,
        content: formData.content.value,
        imageUrl: formData.imageUrl.value,
        createdBy: formData.createdBy.value
      }
    }).pipe(
      map(response => response.data.updateExperience)
    );
  }

  deleteExperience(id: string): Observable<Experience> {
    const DELETE_EXPERIENCE = `
      mutation DeleteExperience($id: String!){
        deleteExperience(id: $id){
          id
          title
          description
          content
          imageUrl
          createdBy
          createdAt
        }
      }
    `;

    return this.apollo.mutate<any>({
      mutation: gql(DELETE_EXPERIENCE),
      variables: {
        id: id
      }
    }).pipe(
      map(response => response.data.deleteExperience)
    );
  }

}