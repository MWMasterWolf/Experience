import { ObjectType, Field, Int, ID } from "@nestjs/graphql";

@ObjectType()
export class LaptopType {
  @Field(() => ID)
  readonly id?: string;
  @Field()
  readonly brand: string;
  @Field()
  readonly model: string;
  @Field(() => Int)
  readonly price: number;
  @Field()
  readonly size: string;
  @Field()
  readonly specs: string;
  @Field({ nullable: true })
  readonly imageUrl?: string;
}