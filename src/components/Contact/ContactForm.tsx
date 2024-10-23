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
import musicLevels from "../Browse/data/musicLevels";

//install zod: npm i zod
//install a resolver to integrate react hook forms with zod: npm i @hookform/resolvers

//z.enum requires a tuple-like array where the first element is guaranteed
//need to assert the array type as a tuple with at least one element.
const levels = musicLevels.map((level) => level.name) as [string, ...string[]];

//if form gets more complex, end up with a lot of validation rules all over the place
//zod library offers schema based validation (shape of the form, basically field value type), I can define all the validation rules in one place
//Define the shape of the form, so that react knows the properties of expected returning values
//so when calling useForm hook can pass this FormData so the autocompletion will work when accesing error properties
//zod provides default error messages based on the type, but its easy to customized them right where I defined the type
//properties represent the form fields, validation rules added using the chaining method
//within the rules, error messages can also be customised, or leave blank to use the default

//lecturer's suggested to make the form static, so I moved error message next to form labels, which has reserved space for display, thus no change in page height when hide and show
const schema = z.object({
  name: z
    .string()
    .min(2, "Name at least 2 characters")
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
//the properties I just defined in the schema will be the FormData when calling useForm
type FormData = z.infer<typeof schema>;

const ContactForm = () => {
  const navigate = useNavigate(); // This is for navigating to the response page on submit

  //deconstruct the required functions from useForm hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  //pass a configuration object using the zod resolver to resolve the zod schema object

  const onSubmit = (data: FieldValues) => {
    // Navigate to the response page and pass the user's name in the state
    navigate("/contactFormResponse", { state: { name: data.name } });
  };

  //the input property always returns a string, need to instruct react form to interpret the age input as number { valueAsNumber: true }
  //otherwise the type error will always be triggered
  //but the initial value is empty string and if nothing is provided will result the value not a valid number (NAN)
  //so can customise the error message for the type of the age input to tell user the field can not be empty

  //error renders all error messages defined in the schema dynamically depends of error type
  //so no need to write display message for every validation rules under input
  // isInvalid={!!errors.age} !! not not true, if error.age is not null, returns true
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
            backgroundColor={"gray.600"}
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
            backgroundColor={"gray.600"}
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
            focusBorderColor="blue.300"
            backgroundColor={"gray.600"}
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
            backgroundColor={"gray.600"}
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
            backgroundColor={"gray.600"}
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
