import { View, Text, FlatList } from "react-native";
import React from "react";
import moment from "moment";
//import { FlatList } from "react-native-gesture-handler";
export default function VirtualiziedScrollView(props) {
  return (
    <FlatList
      {...props}
      disableVirtualization={true}
      data={[]}
      listKey={moment().valueOf().toString()}
      // listKey={(item, index) => `_key${index.toString()}`}
      keyExtractor={(item, index) => `_key${index.toString()}`}
      ListEmptyComponent={null}
      renderItem={null}
      ListHeaderComponent={() => <>{props.children}</>}
    />
  );
}
