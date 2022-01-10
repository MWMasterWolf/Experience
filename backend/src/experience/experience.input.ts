import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class experienceInput {
  @Field()
  readonly title: string;
  @Field()
  readonly description: string;
  @Field()
  readonly content: string;
  @Field({ nullable: true })
  readonly imageUrl: string;
  @Field()
  readonly createdBy: string;
  @Field({ nullable: true })
  readonly createdAt?: string;
}