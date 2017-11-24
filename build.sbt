
name := """kebja"""
organization := "rontech.com"

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayJava, PlayEbean)

scalaVersion := "2.12.2"

libraryDependencies += guice
libraryDependencies += jdbc
libraryDependencies += "mysql" % "mysql-connector-java" % "5.1.39"
libraryDependencies += "org.apache.solr" % "solr-solrj" % "7.1.0"
libraryDependencies += "com.adrianhurt" %% "play-bootstrap" % "1.2-P26-B3"

// Resolver is needed only for SNAPSHOT versions
//resolvers += "Sonatype OSS Snapshots" at "https://oss.sonatype.org/content/repositories/snapshots/"
