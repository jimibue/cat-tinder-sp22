# Starter setup


## rails setup (Back Only)

```
# creates a new rails project called project-name  using a postgresql
# --api that is going to make rails only act as api (rails to have and views)
# rails is a mvc framework, doing --api really makes our app an mv framework
# we user react as the view
# --api makes rails backend only (get http request => respond with json(data))

$ rails new project-name -d postgresql --api
$ cd project-name 
$ rails db:create
```

## add gems
gems third party libraries that do stuff us
- faker => create fake, but real-looking data
- pry-rails => help us debug
- devise-token-auth => help with auth on the backend
- ...lots more what ever you need

> NOTE: to add a gem add it to your gemfile, then run bundle to install gem


## devise-token-auth setup (backend)
1. add gem to gemfile
```
# using this in our gemfile (might want to use version < 6.2 of rails)
gem 'devise_token_auth', '>= 1.2.0', git: "https://github.com/lynndylanhurley/devise_token_auth"
```

2. create a devise model 
```
 # this creating  a devise 'User' model and some routes
 rails g devise_token_auth:install User api/auth

```

3. add extends in model
```
class User < ActiveRecord::Base
  extend Devise::Models
  ....
```

4. add columns to our User via a migration

```
# create a migration file called TIMESTAMP_add_trackable_to_users.rb
rails g migration add_trackable_to_users
```

```
class AddTrackableToUsers < ActiveRecord::Migration[6.0]
  def change
      ## Trackable
      add_column :users, :sign_in_count, :integer, :default => 0
      add_column :users, :current_sign_in_at, :datetime
      add_column :users, :last_sign_in_at, :datetime
      add_column :users, :current_sign_in_ip, :string
      add_column :users, :last_sign_in_ip, :string
  end
end
```

```
rails db:migrate
```

## Front End Setup

in rails project create a react-app
why do I do this in my rails app? they are two separate apps
  - organized,
  - also i can share a github repo
  - in a sense they im using them as one 
why do I call it client?
  - i don't have to, client is just is used as the frontend

```
 yarn create react-app client
```

### add third party packages (can always add more later as needed)
- react-router-dom
- axios
- react-bootstrap

in client dir
```
yarn add axios
```

add proxy
client/package.json
```
"proxy": "http://localhost:3001",
```

### folder structure
in client dir
```
$ mkdir src/components
$ mkdir src/providers
$ mkdir src/hooks
$ mkdir src/components/auth
$ mkdir src/components/shared 
```
