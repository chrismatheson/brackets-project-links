brackets-project-links
======================

Project Links extension for Brackets 

##Useage

So far this is amazingly alpha, but i would love to have input on the features i intend to add 
and pull requests are allways welcome.

add objects to the ```_links``` array in the form of

```javascript

{
  link: <String: the link you want opened>,
  icon: <String: a link to the icon>
}
        
```

**note** icons are given a max width of 22px to fit inside the sidebar.

##Roadmap

* read links from package.json
* add links via the sidebar / project prefs
* read links in from project proefs
* fetch favicons for use as icons when no icon has been specified
