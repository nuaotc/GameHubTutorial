import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  Text,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { input } from "framer-motion/client";
import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";

const levels = ["Beginner", "Intermediate", "Master"] as const;

//with z, I can define all the validation rules in one place
//Define the shape of the form, so that react knows the properties of expected returning values
//so when calling useForm hook can pass this FormData so the autocompletion will work when accesing error properties
// version four: react hook form zod method: npm i zod
//if form gets more complex, end up with a lot of validation rules all over the place
//zod library offers schema based validation which basically means define all of the validation in a single place
//install a resolver to integrate react hook forms with zod npm i @hookform/resolvers
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//using z to define the shape or scheme of the form and all the validation rules
//zod provides default error messages based on the type, but its easy to customized them right where I defined the type
//properties represent the form fields, validation rules added using the chaining method
//within the rules, error messages can also be customised, or leave blank to use the default
const schema = z.object({
  name: z.string().min(2, { message: "Name at least 2 characters" }),
  age: z
    .number({
      invalid_type_error: "Age is required",
    })
    .min(3, "You need to be at least 3 years old")
    .max(130, "Longest living person recorded is 122 years old"),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("Invalid email address"),
  level: z.enum(levels, {
    errorMap: () => ({ message: "Please select your violin skill level" }),
  }),
});

//z has a method that extracts the type from a schema logic similar to an interface
//the properties I just defined in the schema will be the FormData
type FormData = z.infer<typeof schema>;

const Form = () => {
  //inorder to use this zod schema with useForm from react hook form, need to install a zod resolver
  //isValid stores whether the form is valid or not, button can be disabled depend on this property
  //WARNING: error message won't show! only shows when try to submit but is disabled to start with
  //formstate isvalid stores wether the form input passes all the validation rules, can be used to disable button if false
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  //pass a configuration object using the zod resolver to resolve the zod schema object

  //storing user data in local storage
  const onSubmit = (data: FieldValues) => console.log(data);

  //the input property always returns a string, need to instruct react form to interpret the age input as number
  //other wise the type error will always be triggered
  //but the initial value is empty string and if nothing is provided will result the value not a valid number (NAN)
  //so can customise the error message for the type of the age input to tell user the field can not be empty

  //error renders all error messages defined in the schema dynamically depends of error type
  //so no need to write hard coded display message for every validation rules

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.name ? false : true} mb="4">
        <FormLabel htmlFor="name">Name</FormLabel>
        <Input
          {...register("name")}
          id="name"
          type="text"
          autoComplete="off"
          focusBorderColor="blue.500"
        />
        {errors.name && (
          <Text color="red.500" fontSize="sm">
            {errors.name.message}
          </Text>
        )}
      </FormControl>

      <FormControl isInvalid={errors.age ? false : true} mb="4">
        <FormLabel htmlFor="age">Age</FormLabel>
        <Input
          {...register("age", { valueAsNumber: true })}
          id="age"
          type="number"
          focusBorderColor="blue.500"
        />
        {errors.age && (
          <Text color="red.500" fontSize="sm">
            {errors.age.message}
          </Text>
        )}
      </FormControl>

      <FormControl isInvalid={errors.email ? false : true} mb="4">
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          {...register("email")}
          id="email"
          type="email"
          focusBorderColor="blue.500"
        />
        {errors.email && (
          <Text color="red.500" fontSize="sm">
            {errors.email.message}
          </Text>
        )}
      </FormControl>

      <FormControl isInvalid={errors.level ? false : true} mb="4">
        <FormLabel htmlFor="level">Level</FormLabel>
        <Select
          {...register("level")}
          id="level"
          placeholder="Select level"
          focusBorderColor="blue.500"
        >
          {levels.map((level) => (
            <option key={level} value={level}>
              {level}
            </option>
          ))}
        </Select>
        {errors.level && (
          <Text color="red.500" fontSize="sm">
            {errors.level.message}
          </Text>
        )}
      </FormControl>

      <Button type="submit" colorScheme="blue" width="full" mt="4">
        Submit
      </Button>
    </form>
  );
};

export default Form;
