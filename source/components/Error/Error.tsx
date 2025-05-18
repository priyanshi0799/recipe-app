import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './Error.styles';

type ErrorProps = {
  refetch: () => void;
};

const Error = (props: ErrorProps) => {
  return (
    <View style={styles.errorContainer}>
      <Text style={styles.errorText}>Something went wrong</Text>
      <TouchableOpacity onPress={props.refetch}>
        <Text style={styles.retryText}>Retry</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Error;
