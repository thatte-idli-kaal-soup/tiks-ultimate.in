+++
title = "Game video data on calls in games"
date = 2018-02-21T11:36:00+05:30
type = "post"
draft = false
+++

We are trying to create a database of calls in game videos, to help people learn
the rules better. If you'd like to help with this, please add the URL and the
time stamp of where the call occured in it, to [our DB](https://docs.google.com/spreadsheets/d/1mOa4FA3libM_l0PlbU8Jq2HDeDqHoJkEvKsr225fIsw/edit#gid=0).


## On a Desktop/Laptop browser {#on-a-desktop-laptop-browser}

If you are watching the video on a latptop, you can use the bookmarklet. [Drag
and drop](https://youtu.be/qx3NxdjajHk?t=25) the link below (Capture Call) to your bookmarks bar.

<div style="text-align: center;">
  <a style="padding: 10px; border: 1px dashed black;"
     href="javascript: (function() {   var GDOC_URL =     "https://script.google.com/macros/s/AKfycbwSJ8SBv-sWWjsz7uNrx29-7c0GWhk-os0ZsD_bwM_gU_c3TnzQ/exec";   var player = document.querySelector("#movie_player"),     time = player.getCurrentTime(),     url = player.getVideoUrl();    player.pauseVideo();    var form = document.createElement("form");   form.style.setProperty("top", "0px");   form.style.setProperty("position", "absolute");   form.style.setProperty("z-index", "10000");   form.style.setProperty("background", "white");   form.style.setProperty("padding", "5px");   form.style.setProperty("width", "310px");    var call = document.createElement("input");   call.setAttribute("type", "text");   call.setAttribute("name", "call");   call.setAttribute("id", "call");   call.setAttribute("placeholder", "Enter type of call");   call.style.setProperty("background-color", "lightpink");   call.style.setProperty("width", "300px");   call.style.setProperty("margin", "2px");   call.style.setProperty("padding", "2px");   call.style.setProperty("font-family", "monospace");   form.append(call);    var comment = document.createElement("textarea");   comment.setAttribute("placeholder", "Additional comments if any... ");   comment.style.setProperty("margin", "2px");   comment.style.setProperty("padding", "2px");   comment.style.setProperty("width", "300px");   comment.style.setProperty("height", "200px");   form.append(comment);    var submit = document.createElement("button");   submit.setAttribute("disabled", "1");   submit.style.setProperty("background-color", "lightgreen");   submit.textContent = "Submit";   form.append(submit);   submit.onclick = function(e) {     e.preventDefault();     submit_data(url, time, call.value, comment.value);     form.remove();   };   call.onkeyup = function(e) {     if (!call.value) {       submit.setAttribute("disabled", "1");       call.style.setProperty("background-color", "lightpink");     } else {       submit.removeAttribute("disabled");       call.style.setProperty("background-color", "white");     }   };    var cancel = document.createElement("button");   cancel.textContent = "X";   cancel.style.setProperty("border", "0px");   cancel.style.setProperty("background", "red");   cancel.style.setProperty("float", "right");   form.append(cancel);   cancel.onclick = function() {     form.remove();   };    document.body.append(form);    var submit_data = function(url, time, call, comment) {     url = encodeURIComponent(url);     time = encodeURIComponent(time);     call = encodeURIComponent(call);     comment = encodeURIComponent(comment);     var data_url = `${GDOC_URL}?url=${url}&time=${time}&call=${call}&comment=${comment}`;     window.open(data_url);   }; })();">
    Capture Call
  </a>
</div>

When you wish to make a note about a call that you are watching on YouTube, you
can click on the bookmarklet (while you are in the video tab), enter some
information, and click submit. The data will get automatically submitted. This
opens a new tab, that you can close and continue watching the video.


## On other devices {#on-other-devices}

Unfortunately, on other devices, you will have to manually enter this data into
this [Google sheet](https://docs.google.com/spreadsheets/d/1mOa4FA3libM_l0PlbU8Jq2HDeDqHoJkEvKsr225fIsw/edit#gid=0).
