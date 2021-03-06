# CHANGELOG
*versions follow [SemVer](http://semver.org)*

## 6.0.0 - 2017-12-16
* BREAKING CHANGE: [`wd data`](https://github.com/maxlath/wikidata-cli/blob/master/docs/read_operations.md#wd-data) and [`wd revisions`](https://github.com/maxlath/wikidata-cli/blob/master/docs/read_operations.md#wd-revisions) now output [newline delimited JSON](https://en.wikipedia.org/wiki/JSON_streaming#Line-delimited_JSON), which is valid JSON if taken line by line, but not as a whole.
* [`wd data`](https://github.com/maxlath/wikidata-cli/blob/master/docs/read_operations.md#wd-data) can now fetch more than 50 entities at once and accepts ids from stdin
* Added [`wd sparql`](https://github.com/maxlath/wikidata-cli/blob/master/docs/read_operations.md#wd-sparql) wellknown query: [`all-instances`](https://github.com/maxlath/wikidata-cli/blob/master/docs/read_operations.md#all-instances)

## 5.7.0 - 2017-12-16
* Add option [`-t, --limit` to `wd search`](https://github.com/maxlath/wikidata-cli/blob/master/docs/read_operations.md#wd-search)
* [`wd claims`](https://github.com/maxlath/wikidata-cli#wd-claims) accepts a filter pattern as second arguments, filtering claims by their properties type or label
* [`wd props --type`](https://github.com/maxlath/wikidata-cli#wd-props) accepts an additional arguments to filter matching properties by property type
* Add option [`-n, --no-cache` to `wd props`](https://github.com/maxlath/wikidata-cli/blob/master/docs/read_operations.md#wd-props)

## 5.6.0 - 2017-12-13
* Add option [`-x, --index` to `wd sparql`](https://github.com/maxlath/wikidata-cli/blob/master/docs/read_operations.md#wd-sparql), returns the request results as an index instead of a list

## 5.5.0 - 2017-12-08
* `wd claims`, `wd data`, `wd open`, and `wd revisions` accept numeric ids, assume it's an item id (commit: 37afea9)

## 5.4.0 - 2017-12-06
* Added the command `wikidata-cli` as an alias to `wd` [UPDATE: implementation failed, removed by d0df064]

## 5.3.0 - 2017-11-30
* Added the possibility to pass a JS file to [`wd sparql`](https://github.com/maxlath/wikidata-cli/blob/master/docs/read_operations.md#wd-sparql) to generate SPARQL requests from the command arguments

## 5.2.0 - 2017-11-29
* Add option [`-v, --verbose` to `wd search`](https://github.com/maxlath/wikidata-cli/blob/master/docs/read_operations.md#wd-search) which passes the found ids to [`wd summary`](https://github.com/maxlath/wikidata-cli/blob/master/docs/read_operations.md#wd-summary)

## 5.1.0 - 2017-11-09
* Added `keep` options to [`wd data`](https://github.com/maxlath/wikidata-cli/blob/master/docs/read_operations.md#claims-simplification-keep-options)

## 5.0.0 - 2017-11-03
* BREAKING CHANGE: [`wd add-reference`](https://github.com/maxlath/wikidata-cli/blob/master/docs/write_operations.md#wd-add-reference) expects a property to be explicity set
* BREAKING CHANGE: [`wd add-claim`](https://github.com/maxlath/wikidata-cli/blob/master/docs/write_operations.md#wd-add-claim) now can't be passed a reference: the reference needs to be added separately. See [add claim with a reference](https://github.com/maxlath/wikidata-cli/blob/master/docs/write_operations.md#with-a-reference).
* Entity attribute commands ([`wd summary`](https://github.com/maxlath/wikidata-cli/blob/master/docs/write_operations.md#wd-summary), [`wd label`](https://github.com/maxlath/wikidata-cli/blob/master/docs/write_operations.md#wd-label), [`wd description`](https://github.com/maxlath/wikidata-cli/blob/master/docs/write_operations.md#wd-description), [`wd aliases`](https://github.com/maxlath/wikidata-cli/blob/master/docs/write_operations.md#wd-aliases)) can now request the attributes of several entities at once
* [`wd add-claim`](https://github.com/maxlath/wikidata-cli/blob/master/docs/write_operations.md#wd-add-claim) accepts time values with month or day precision
* [`wd add-claim`](https://github.com/maxlath/wikidata-cli/blob/master/docs/write_operations.md#wd-add-claim) now supports [rich values]((https://github.com/maxlath/wikidata-cli/blob/master/docs/write_operations.md#rich-values))
* Added [`wd edit-item`](https://github.com/maxlath/wikidata-cli/blob/master/docs/write_operations.md#wd-edit-item)
* Added [`wd remove-reference`](https://github.com/maxlath/wikidata-cli/blob/master/docs/write_operations.md#wd-remove-reference)
* Added [`wd add-qualifier`](https://github.com/maxlath/wikidata-cli/blob/master/docs/write_operations.md#wd-add-qualifier)
* Added [`wd update-qualifier`](https://github.com/maxlath/wikidata-cli/blob/master/docs/write_operations.md#wd-update-qualifier)
* Added [`wd remove-qualifier`](https://github.com/maxlath/wikidata-cli/blob/master/docs/write_operations.md#wd-remove-qualifier)

## 4.19.0 - 2017-10-29
* Added [`wd create-item`](https://github.com/maxlath/wikidata-cli/blob/master/docs/write_operations.md#wd-create-item)

## 4.18.0 - 2017-10-13
* Let [`wd props`](https://github.com/maxlath/wikidata-cli#wd-props) accept additional arguments to filter matching properties

## 4.17.0 - 2017-10-13
* Added [`wd summary --properties` option](https://github.com/maxlath/wikidata-cli/blob/master/docs/read_operations.md#wd-summary)

## 4.16.0 - 2017-10-13
* Added [bot](https://github.com/maxlath/wikidata-cli/blob/master/docs/config.md#bot) support

## 4.15.0 - 2017-10-07
* Added [`wd search`](https://github.com/maxlath/wikidata-cli/blob/master/docs/read_operations.md#wd-search)

## 4.14.0 - 2017-09-11
* Added [`wd aliases`](https://github.com/maxlath/wikidata-cli/blob/master/docs/write_operations.md#wd-aliases)
* Added [`wd add-alias`](https://github.com/maxlath/wikidata-cli/blob/master/docs/write_operations.md#wd-add-alias)
* Added [`wd remove-alias`](https://github.com/maxlath/wikidata-cli/blob/master/docs/write_operations.md#wd-remove-alias)
* Added [`wd set-alias`](https://github.com/maxlath/wikidata-cli/blob/master/docs/write_operations.md#wd-set-alias)

## 4.13.0 - 2017-06-10
* Added [`wd revisions`](https://github.com/maxlath/wikidata-cli/blob/master/docs/read_operations.md#wd-revisions)

## 4.12.0 - 2017-05-29
* Add option [`-p,--props` to `wd data`](https://github.com/maxlath/wikidata-cli/blob/master/docs/read_operations.md#filtered-properties)

## 4.11.0 - 2017-05-24
* Added [`wd update-claim`](https://github.com/maxlath/wikidata-cli/blob/master/docs/write_operations.md#wd-update-claim)

## 4.10.0 - 2017-05-24
* Added [`wd remove-description`](https://github.com/maxlath/wikidata-cli#wd-remove-description)

## 4.9.0 - 2017-05-14
* Added [`wd set-description`](https://github.com/maxlath/wikidata-cli#wd-set-description)

## 4.8.0 - 2017-03-31
* Added multiple entities mode to [`wd data`](https://github.com/maxlath/wikidata-cli/blob/master/docs/read_operations.md#wd-data)
* Added `simplify` option to [`wd data`](https://github.com/maxlath/wikidata-cli/blob/master/docs/read_operations.md#wd-data)
* Output [`wd data`](https://github.com/maxlath/wikidata-cli/blob/master/docs/read_operations.md#wd-data) data as Wikidata-Dump-style line delimited JSON to make filterable by [`wikidata-filter`](https://github.com/maxlath/wikidata-filter)

## 4.7.0 - 2017-03-30
* Added [`wd summary`](https://github.com/maxlath/wikidata-cli/blob/master/docs/read_operations.md#wd-summary)
* Added [`wd description`](https://github.com/maxlath/wikidata-cli/blob/master/docs/read_operations.md#wd-description)

## 4.6.0 - 2017-02-20
* Added option `-u,--url` to [`wd open`](https://github.com/maxlath/wikidata-cli/blob/master/docs/read_operations.md#wd-open)

## 4.5.0 - 2017-02-20
* Added [`wd set-label`](https://github.com/maxlath/wikidata-cli/blob/master/docs/write_operations.md/blob/master/docs/write_operations.md#wd-set-label)
* Added [`wd add-reference`](https://github.com/maxlath/wikidata-cli/blob/master/docs/write_operations.md#wd-add-reference)

## 4.4.0 - 2017-02-19
* Added [`wd add-claim`](https://github.com/maxlath/wikidata-cli/blob/master/docs/write_operations.md#wd-add-claim)
* Added [`wd config`](https://github.com/maxlath/wikidata-cli#config)

## 4.3.0 - 2017-02-07
* Added [`wd props --type`](https://github.com/maxlath/wikidata-cli#get-the-list-of-all-wikidata-properties-and-their-data-types)

## 4.2.0 - 2017-01-28
* Added [`wd coord`](https://github.com/maxlath/wikidata-cli/blob/master/docs/read_operations.md#wd-coord)

## 4.1.0 - 2017-01-24
* [`wd open`](https://github.com/maxlath/wikidata-cli/blob/master/docs/read_operations.md#wd-open) opens a search page when no entity or property id can be found in the input

## 4.0.0 - 2017-01-21
* Make results minimalist unless bassed the `-v, --verbose` option. Could be considered a breaking change as one might have built on the default verbose outputs.
* Not copying results to clipboard anymore, unless passed the `-c, --clipboard` option
* Format outputs for the shell by default, unless passed the `-j, --json` option
* Renamed `wd wikiqid` to [`wd id`](https://github.com/maxlath/wikidata-cli/blob/master/docs/read_operations.md#wd-id). Using [github#master version of commander to be able to set wikiqid as an alias](https://github.com/tj/commander.js/issues/402) to avoid making it a breaking change.

## 3.0.0 - 2016-08-29
* Renamed `wd graph` -> [`wd query`](https://github.com/maxlath/wikidata-cli/blob/master/docs/read_operations.md#wd-query)

## 2.1.0 - 2016-08-29
* Added `wd graph`

## 2.0.0 - 2016-08-26
* Added a help menu: `wd help`
* Renamed `qlabel` -> `wd label`
* Renamed `qclaims` -> `wd claims`
* Renamed `qdata` -> `wd data`
* Renamed `wdprops` -> `wd props`
* Renamed `wdprops reset` -> `wd props --reset`
* Renamed `wikiqid` -> `wd wikiqid`
* Renamed `wdsparql` -> `wd sparql`
* Removed `wdsparqlsimplify`: use `wd sparql -s`
* Replaced all language options by a uniformized `-l, --lang` option
* Added `wd open`

## 1.7.0 - 2016-07-24
* Added [qdata](https://github.com/maxlath/wikidata-cli#qdata), a command to get the data of a given entity

## 1.6.0 - 2016-07-17
* [wikiqid](https://github.com/maxlath/wikidata-cli#wikiqid) accepts full wikipedia urls

## 1.5.0 - 2016-06-18
* Added [wdsparqlsimplify](https://github.com/maxlath/wikidata-cli#wdsparqlsimplify), like `wdsparql` but with simplified results out of the box

## 1.4.0 - 2016-06-18
* Added [wdprops](https://github.com/maxlath/wikidata-cli#wdprops), a command to get the list of all Wikidata properties

## 1.3.1 - 2016-06-06
* Added a new option to [wdsparql](https://github.com/maxlath/wikidata-cli#wdsparql):

  `--simplify`, which simplifies the query results using [wikidata-sdk `simplifySparqlResults`](https://github.com/maxlath/wikidata-sdk/blob/master/docs/simplify_sparql_results.md) function

## 1.2.1 - 2016-06-03
* Commands use the environment local language as default instead of English

## 1.2.0 - 2016-06-03
* Added [wdsparql](https://github.com/maxlath/wikidata-cli#wdsparql)

## 1.1.0 - 2016-05-13
* Added [qclaims](https://github.com/maxlath/wikidata-cli#qclaims)

## 1.0.0 - 2016-05-13
* Created project, starting with [qlabel](https://github.com/maxlath/wikidata-cli#qlabel) and [wikiqid](https://github.com/maxlath/wikidata-cli#wikiqid) commands
