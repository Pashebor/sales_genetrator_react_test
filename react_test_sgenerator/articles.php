<?php

$articles = array((object)[
    "id" => 1,
    "author"=> "E. Hyperraccoon",
    "image"=> "images/flowers.png",
    "header"=> "Blogotitle of blogopost about blogoflowers",
    "text"=> "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "time"=>"2016-11-07T08:55:16.192Z",
    "tags"=>["Racoon", "Racoon", "Coon", "Dog", "Cat", "Developer", "Anna", "Beer", "Banana"]
], (object)[
    "id" => 2,
    "author"=>"E. Hyperraccoon",
    "image"=>"images/paint.png",
    "header"=> "Blogotitle of paints",
    "text"=> "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "time"=>"2016-11-07T08:55:16.192Z",
    "tags"=> ["Racoon", "Racoon", "Coon", "Dog", "Cat", "Duck", "Developer", "Car", "Jeep"]
], (object)[
    "id"=> 3,
    "author"=> "P. Demyanov",
    "image"=>"images/paint.png",
    "header"=> "Blogotitle of paints",
    "text"=> "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "time"=> "2016-11-07T08:55:16.192Z",
    "tags"=> ["tag1", "tag2", "tag1", "tag3"]
]);

if($_SERVER['REQUEST_METHOD'] == 'DELETE') {
    $idToDel = $_GET['id'];
    $newIdToDel = preg_replace('/\d+\//', '', $idToDel);
    echo json_encode(['id' => $newIdToDel]);
}

if($_SERVER['REQUEST_METHOD'] == 'GET') {
    $id = $_GET['id'];

    if($id != null) {
    $newId = preg_replace('/\d+\//', '', $id);
    foreach ($articles as $obj) {
        if ($obj->id == $newId) {
            echo json_encode($obj);
        }
    }
} else {
    echo  json_encode($articles);
}

}
?>