# DJ.on

## Version 0.0.1-nightly

### ADD

- Database
  - **create** : Create a database into custom folder width `dbjon.db` extension
  - **connect** : Connect a database
  - **purgue** : This function set a clean body, without modify headers
  - **delete** : Delete created database
- Collection
- Security
  - **encrypt** : Encrypt database after created
  - **decrypt** : Decrypt database after called
- Utilities
  - **Strings** : String management
    - camelize
  - **Types** : Validate the type of data and return the value if it is true _**[ Recommended ]**_
    - number
    - string
    - boolean
    - object
    - array
    - function
    - date
    - regex
    - error
- Events
  - **on** : This called when any action is taken with the library

### FIXED

- Database
- Collection
- Security
- Utilities
- Events

### TODO

- Database
  - [ ] Implements gZip module
- Collection
  - [ ] **insert**
  - [ ] **insetOne**
  - [ ] **insetMany**
  - [ ] **find**
  - [ ] **update**
  - [ ] **delete**
  - [ ] **deleteOne**
  - [ ] **deleteMany**
  - [ ] **purge**
  - [ ] **merge**
- Security
- Utilities
- Events
- MISCELLANEOUS
  - [ ] Fix github works for npm publish
  - [ ] Create markdown documentation
  - [ ] Create web documentation
