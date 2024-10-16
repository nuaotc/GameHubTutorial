import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  Text,
  Box,
  Textarea,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { useNavigate } from "react-router-dom";

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

//As per lecturer's request, I made the form static, everything will show in reserved places, no change in page height
const schema = z.object({
  name: z
    .string()
    .min(2, "Name at least 2 characters") // Ensures the name field is not empty
    .regex(/^[A-Za-z]+$/, "Name should only contain A to Z"),
  age: z
    .number({
      invalid_type_error: "Age is required",
    })
    .min(3, "Too young")
    .max(130, "Too old"),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("Invalid email address"),
  level: z.enum(levels, {
    errorMap: () => ({ message: "Please select a level" }),
  }),
  request: z.string().min(5, "Message at least 5 characters"),
});

//z has a method that extracts the type from a schema logic similar to an interface
//the properties I just defined in the schema will be the FormData
type FormData = z.infer<typeof schema>;

const ContactForm = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate

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
  const onSubmit = (data: FieldValues) => {
    // Navigate to the response page and pass the user's name
    navigate("/contactFormResponse", { state: { name: data.name } });
  };

  //the input property always returns a string, need to instruct react form to interpret the age input as number
  //other wise the type error will always be triggered
  //but the initial value is empty string and if nothing is provided will result the value not a valid number (NAN)
  //so can customise the error message for the type of the age input to tell user the field can not be empty

  //error renders all error messages defined in the schema dynamically depends of error type
  //so no need to write hard coded display message for every validation rules
  //

  return (
    <Box marginY={10} marginX={{ base: 10, lg: 200, xl: 400 }}>
      <Text fontSize={20} mb={5} color={"blue.300"}>
        Request music here:
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={!!errors.name} mb="4">
          <Box display="inline-flex" alignItems="center">
            <FormLabel htmlFor="name" marginBottom="0">
              Name
            </FormLabel>
            {errors.name && (
              <Text color="red.300" fontSize="sm" ml={2} mt={0}>
                {errors.name.message}
              </Text>
            )}
          </Box>
          <Input
            {...register("name")}
            id="name"
            type="text"
            autoComplete="off"
            focusBorderColor="blue.300"
            backgroundColor={"gray.700"}
            mt={1}
          />
        </FormControl>

        <FormControl isInvalid={!!errors.age} mb="4">
          <Box display="inline-flex" alignItems="center">
            <FormLabel htmlFor="age" marginBottom="0">
              Age
            </FormLabel>
            {errors.age && (
              <Text color="red.300" fontSize="sm" ml={2} mt={0}>
                {errors.age.message}
              </Text>
            )}
          </Box>
          <Input
            {...register("age", { valueAsNumber: true })}
            id="age"
            type="number"
            autoComplete="off"
            focusBorderColor="blue.300"
            backgroundColor={"gray.700"}
            mt={1}
          />
        </FormControl>

        <FormControl isInvalid={!!errors.email} mb="4">
          <Box display="inline-flex" alignItems="center">
            <FormLabel htmlFor="email" marginBottom="0">
              Email
            </FormLabel>
            {errors.email && (
              <Text color="red.300" fontSize="sm" ml={2} mt={0}>
                {errors.email.message}
              </Text>
            )}
          </Box>
          <Input
            {...register("email")}
            id="email"
            type="email"
            autoComplete="off"
            focusBorderColor="blue.300"
            backgroundColor={"gray.700"}
            mt={1}
          />
        </FormControl>

        <FormControl isInvalid={!!errors.level} mb="4">
          <Box display="inline-flex" alignItems="center">
            <FormLabel htmlFor="level" marginBottom="0">
              Level
            </FormLabel>
            {errors.level && (
              <Text color="red.300" fontSize="sm" ml={2} mt={0}>
                {errors.level.message}
              </Text>
            )}
          </Box>
          <Select
            {...register("level")}
            id="level"
            placeholder="Select level"
            focusBorderColor="blue.300"
            backgroundColor={"gray.700"}
            mt={1}
          >
            {levels.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </Select>
        </FormControl>

        <FormControl isInvalid={!!errors.request} mb="4">
          <Box display="inline-flex" alignItems="center">
            <FormLabel htmlFor="request" marginBottom="0">
              Message
            </FormLabel>
            {errors.request && (
              <Text color="red.300" fontSize="sm" ml={2} mt={0}>
                {errors.request.message}
              </Text>
            )}
          </Box>
          <Textarea
            {...register("request")}
            id="request"
            placeholder="Tell us anything!"
            focusBorderColor="blue.300"
            backgroundColor={"gray.700"}
            mt={1}
          />
        </FormControl>

        <Button
          type="submit"
          backgroundColor={"blue.300"}
          color={"black"}
          width="full"
          mt="4"
          fontWeight={"bold"}
          _hover={{ bg: "white" }}
        >
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default ContactForm;
