import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { HeaderContainer, SearchBar } from './styles/Header.styles';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function Header({ searchQuery, setSearchQuery }: HeaderProps) {
  return (
    <HeaderContainer>
      <SearchBar>
        <input
          type="text"
          placeholder="Search for movies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <FiSearch className="search-icon" />
      </SearchBar>
    </HeaderContainer>
  );
} 