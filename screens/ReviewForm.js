import React from "react";
import { TextInput, View, Text } from "react-native";
import { globalStyles } from "../styles/Global";
import { Formik } from "formik";
import * as yup from "yup";
import FlatButton from "../Shared/Button";

const reviewSchema = yup.object({
  title: yup.string().required().min(4),
  body: yup.string().required().min(8),
  rating: yup
    .string()
    .required()
    .test("is-num-1-5", "Rating must be a number 1 - 5", (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
});

const ReviewForm = ({ handleAddReview }) => {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          handleAddReview(values);
        }}
      >
        {({
          handleChange,
          handleSubmit,
          handleBlur,
          values,
          errors,
          touched,
        }) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Review title"
              value={values.title}
              onChangeText={handleChange("title")}
              onBlur={handleBlur("title")}
            />
            <Text style={globalStyles.errorText}>
              {touched.title && errors.title}
            </Text>

            <TextInput
              style={globalStyles.input}
              multiline
              minHeight={60}
              placeholder="Review details"
              value={values.body}
              onChangeText={handleChange("body")}
              onBlur={handleBlur("body")}
            />
            <Text style={globalStyles.errorText}>
              {touched.body && errors.body}
            </Text>
            <TextInput
              style={globalStyles.input}
              placeholder="Rating (1 - 5)"
              value={values.rating}
              keyboardType="numeric"
              onChangeText={handleChange("rating")}
              onBlur={handleBlur("rating")}
            />
            <Text style={globalStyles.errorText}>
              {touched.rating && errors.rating}
            </Text>

            <FlatButton text="Submit" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default ReviewForm;
