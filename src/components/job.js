import React from "react";
import {FormattedDate, FormattedMessage } from 'react-intl';

const getMillionString = (value, locale) => {
  if (locale === 'es') {
    return value === 1 ? 'millón' : 'millones';
  }
  return 'million';
};


const Job = (props) => {

  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>{props.offer.name}</td>
      <td>{props.offer.company}</td>
      <td>{props.offer.salary}</td>
      <td>{props.offer.city}</td>
      <td>
        <FormattedDate
          value={new Date(props.offer.date)}
          year='numeric'
          month='long'
          day='numeric'
          weekday='long'
        />
      </td>
      <td>
      <FormattedMessage
        id="Salary"
        values={{ salaryMillions: props.offer.salary }}
      >
        {(message) => (
          message.replace(
            'million',
            getMillionString(props.offer.salary, locale)
          )
        )}
      </FormattedMessage>
      </td>
    </tr>
  );
};

export default Job;
