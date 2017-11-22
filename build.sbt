
name := """kbj"""
organization := "rontech.com"

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayJava, PlayEbean)

scalaVersion := "2.12.2"

libraryDependencies += guice
libraryDependencies += jdbc
libraryDependencies += "mysql" % "mysql-connector-java" % "5.1.39"

// solr
libraryDependencies += "org.apache.solr" % "solr-solrj" % "7.1.0"