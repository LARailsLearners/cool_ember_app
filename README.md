We built this **cool_ember_app** and **cool_new_app** pair [last night](http://www.meetup.com/LA-Eastside-Ruby-Rails-Study-Group/events/225887815/) meetup.

## Ember app side
### Installation

```
git clone https://github.com/LARailsLearners/cool_ember_app.git
cd cool_ember_app
npm install
bower install
```

## Rails app side
### Installation

```
git clone https://github.com/LARailsLearners/cool_new_app.git
cd cool_new_app
bundle install
rake db:migrate
```
## Running / Development
### Rails app side

```
rails server
```
and let the ember app come and get JSON at [http://localhost:3000](http://localhost:3000)
### Ember app side

```
ember server --proxy http://localhost:3000
```
and then visit [http://localhost:4200](http://localhost:4200).

--
For any discussions, questions, please talk to other group members or come to [RubyMobs Slack](https://rubymobs.slack.com) group
