import React from 'react';
import {FlatList as FlatListRN, RefreshControl} from 'react-native';

const FlatList = props => {
  const {data, renderItem, onRefresh, onLoadMore} = props;
  return (
    <FlatListRN
      {...props}
      data={data}
      keyExtractor={(e, i) => i.toString()}
      extraData={data}
      keyboardShouldPersistTaps="handled"
      renderItem={renderItem}
      refreshControl={
        <RefreshControl
          refreshing={false}
          onRefresh={() => {
            onRefresh && onRefresh();
          }}
        />
      }
      onEndReachedThreshold={0.5}
      onEndReached={() => onLoadMore && onLoadMore()}
    />
  );
};

export default FlatList;
