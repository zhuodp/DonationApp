import React, {useRef, useState} from 'react';
import style from './style';
import {Pressable, TextInput, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const Search = props => {
  const textInputRef = useRef(null);
  const handleFocus = () => {
    textInputRef.current.focus();
  };

  const [search, setSearch] = useState('');
  const handleSearch = searchValue => {
    setSearch(searchValue);
    props.onSearch(searchValue);
  };

  return (
    <Pressable style={style.searchContainer} onPress={handleFocus}>
      <FontAwesomeIcon
        icon={faSearch}
        style={style.searchIcon}
        color={'#25C0FF'}
        size={14}
      />
      <TextInput
        placeholder={props.placeholder}
        ref={textInputRef}
        style={style.searchInput}
        value={search}
        onChangeText={value => handleSearch(value)}
      />
    </Pressable>
  );
};

Search.defaultProps = {
  onSearch: () => {},
  placeholder: 'Search',
};

Search.propTypes = {
  onSearch: PropTypes.func,
  placeholder: PropTypes.string,
};

export default Search;
