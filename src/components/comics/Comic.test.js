import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

import Comics from './Comics';

const props = {
  comics: [
    [
      {
        "id": 22506,
        "digitalId": 10949,
        "title": "Avengers: The Initiative (2007) #19",
        "issueNumber": 19,
        "variantDescription": "",
        "description": "Join 3-D MAN, CLOUD 9, KOMODO, HARDBALL, and heroes around America in the battle that will decide the fate of the planet and the future of the Initiative program. Will the Kill Krew Army win the day?",
        "modified": "2015-10-27T16:38:23-0400",
        "isbn": "",
        "upc": "5960606084-01911",
        "diamondCode": "SEP082362",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 32,
        "textObjects": [
          {
            "type": "issue_preview_text",
            "language": "en-us",
            "text": "Join 3-D MAN, CLOUD 9, KOMODO, HARDBALL, and heroes around America in the battle that will decide the fate of the planet and the future of the Initiative program. Will the Kill Krew Army win the day?"
          },
          {
            "type": "issue_solicit_text",
            "language": "en-us",
            "text": "SECRET INVASION Tie-In!\r<br>\"V-S DAY\"\r<br>It's been leading to this since the Hank Pym Skrull first came up with the idea for a Fifty State Initiative.  This is the final assault in the Secret Invasion, a nation-wide plan that will test the limits of 3-D MAN'S superhuman militia, THE KILL KREW ARMY! Join 3-D MAN, CLOUD 9, KOMODO, HARDBALL, and heroes around America in the battle that will decide the fate of the planet and the future of the Initiative program.  Win or lose, there's no turning back.  After today, everything changes.\r<br>Rated T+ ...$2.99\r<br>"
          }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/22506",
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/issue/22506/avengers_the_initiative_2007_19?utm_campaign=apiRef&utm_source=95325aa111902ebfca44e3550d78161e"
          },
          {
            "type": "purchase",
            "url": "http://comicstore.marvel.com/Avengers-The-Initiative-19/digital-comic/10949?utm_campaign=apiRef&utm_source=95325aa111902ebfca44e3550d78161e"
          },
          {
            "type": "reader",
            "url": "http://marvel.com/digitalcomics/view.htm?iid=10949&utm_campaign=apiRef&utm_source=95325aa111902ebfca44e3550d78161e"
          },
          {
            "type": "inAppLink",
            "url": "https://applink.marvel.com/issue/10949?utm_campaign=apiRef&utm_source=95325aa111902ebfca44e3550d78161e"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/1945",
          "name": "Avengers: The Initiative (2007 - 2010)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
          {
            "type": "onsaleDate",
            "date": "2008-12-17T00:00:00-0500"
          },
          {
            "type": "focDate",
            "date": "2008-11-27T00:00:00-0500"
          },
          {
            "type": "unlimitedDate",
            "date": "2010-02-23T00:00:00-0500"
          },
          {
            "type": "digitalPurchaseDate",
            "date": "2011-08-09T00:00:00-0400"
          }
        ],
        "prices": [
          {
            "type": "printPrice",
            "price": 2.99
          },
          {
            "type": "digitalPurchasePrice",
            "price": 1.99
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/d/03/58dd080719806",
          "extension": "jpg"
        },
        "images": [
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/d/03/58dd080719806",
            "extension": "jpg"
          }
        ],
        "creators": {
          "available": 9,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/22506/creators",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/2133",
              "name": "Tom Brevoort",
              "role": "editor"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/452",
              "name": "Virtual Calligr",
              "role": "letterer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/12581",
              "name": "Chris Eliopoulos",
              "role": "letterer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/1400",
              "name": "Bong Dazo",
              "role": "penciller"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/11765",
              "name": "Christos Gage",
              "role": "writer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/12983",
              "name": "Dan Slott",
              "role": "writer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/8706",
              "name": "Jay David Ramos",
              "role": "colorist"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/500",
              "name": "Christopher Sotomayor",
              "role": "colorist"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/8584",
              "name": "Harvey Tolibao",
              "role": "inker"
            }
          ],
          "returned": 9
        },
        "characters": {
          "available": 9,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/22506/characters",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011334",
              "name": "3-D Man"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010802",
              "name": "Ant-Man (Eric O'Grady)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009165",
              "name": "Avengers"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009284",
              "name": "Dum Dum Dugan"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011490",
              "name": "Hank Pym"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010821",
              "name": "Hardball"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009376",
              "name": "Jocasta"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010818",
              "name": "Komodo (Melati Kusuma)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009737",
              "name": "Yellowjacket (Hank Pym)"
            }
          ],
          "returned": 9
        },
        "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/22506/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/49888",
              "name": "AVENGERS: THE INITIATIVE (2007) #19",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/49889",
              "name": "Avengers: The Initiative (2007) #19 - Int",
              "type": "interiorStory"
            }
          ],
          "returned": 2
        },
        "events": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/22506/events",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/269",
              "name": "Secret Invasion"
            }
          ],
          "returned": 1
        }
      },
      {
        "id": 22299,
        "digitalId": 10948,
        "title": "Avengers: The Initiative (2007) #18",
        "issueNumber": 18,
        "variantDescription": "",
        "description": "Now that the Kill Krew knows Skrullowjacket's master plan, can they stop the true mission of the Fifty State Initiative? Plus, Thor Girl vs. Ultra Girl! One is more than she appears to be and the other's a Skrull!",
        "modified": "2014-08-05T14:09:33-0400",
        "isbn": "",
        "upc": "5960606084-01811",
        "diamondCode": "AUG082377",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 32,
        "textObjects": [
          {
            "type": "issue_preview_text",
            "language": "en-us",
            "text": "Now that the Kill Krew knows Skrullowjacket's master plan, can they stop the true mission of the Fifty State Initiative? Plus, Thor Girl vs. Ultra Girl! One is more than she appears to be and the other's a Skrull!"
          },
          {
            "type": "issue_solicit_text",
            "language": "en-us",
            "text": "SECRET INVASION TIE-IN!\r<br>THE EXPLOSIVE FINALE STARTS HERE!\r<br>Now that the KILL KREW knows Skrullowjacket's master plan, can they stop the TRUE purpose of the Fifty State Initiative? Plus:  It's THOR GIRL vs. ULTRA GIRL!  One is more than she appears to be... and the other's a Skrull. And, after fourteen issues, are we REALLY going to unmask MUTANT ZERO?!\r<br>Rated T+ ...$2.99"
          }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/22299",
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/issue/22299/avengers_the_initiative_2007_18?utm_campaign=apiRef&utm_source=95325aa111902ebfca44e3550d78161e"
          },
          {
            "type": "purchase",
            "url": "http://comicstore.marvel.com/Avengers-The-Initiative-18/digital-comic/10948?utm_campaign=apiRef&utm_source=95325aa111902ebfca44e3550d78161e"
          },
          {
            "type": "reader",
            "url": "http://marvel.com/digitalcomics/view.htm?iid=10948&utm_campaign=apiRef&utm_source=95325aa111902ebfca44e3550d78161e"
          },
          {
            "type": "inAppLink",
            "url": "https://applink.marvel.com/issue/10948?utm_campaign=apiRef&utm_source=95325aa111902ebfca44e3550d78161e"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/1945",
          "name": "Avengers: The Initiative (2007 - 2010)"
        },
        "variants": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/22300",
            "name": "Avengers: The Initiative (2007) #18 (ZOMBIE VARIANT)"
          }
        ],
        "collections": [],
        "collectedIssues": [],
        "dates": [
          {
            "type": "onsaleDate",
            "date": "2008-10-29T00:00:00-0400"
          },
          {
            "type": "focDate",
            "date": "2008-10-09T00:00:00-0400"
          },
          {
            "type": "unlimitedDate",
            "date": "2010-02-09T00:00:00-0500"
          },
          {
            "type": "digitalPurchaseDate",
            "date": "2011-08-09T00:00:00-0400"
          }
        ],
        "prices": [
          {
            "type": "printPrice",
            "price": 2.99
          },
          {
            "type": "digitalPurchasePrice",
            "price": 1.99
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/20/58dd057d304d1",
          "extension": "jpg"
        },
        "images": [
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/20/58dd057d304d1",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/20/4bb6d098d144a",
            "extension": "jpg"
          }
        ],
        "creators": {
          "available": 7,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/22299/creators",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/2133",
              "name": "Tom Brevoort",
              "role": "editor"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
              "name": "Vc Joe Caramagna",
              "role": "letterer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/11765",
              "name": "Christos Gage",
              "role": "writer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/12983",
              "name": "Dan Slott",
              "role": "writer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/548",
              "name": "Andrew Hennessy",
              "role": "inker"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/4981",
              "name": "Steve Kurth",
              "role": "penciller"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/1405",
              "name": "Matt Milla",
              "role": "colorist"
            }
          ],
          "returned": 7
        },
        "characters": {
          "available": 13,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/22299/characters",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011334",
              "name": "3-D Man"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010802",
              "name": "Ant-Man (Eric O'Grady)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009165",
              "name": "Avengers"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010823",
              "name": "Cloud 9"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009284",
              "name": "Dum Dum Dugan"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010702",
              "name": "Gravity"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011490",
              "name": "Hank Pym"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010821",
              "name": "Hardball"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009376",
              "name": "Jocasta"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010818",
              "name": "Komodo (Melati Kusuma)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009599",
              "name": "Skrulls"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010820",
              "name": "Thor Girl"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009737",
              "name": "Yellowjacket (Hank Pym)"
            }
          ],
          "returned": 13
        },
        "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/22299/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/49103",
              "name": "AVENGERS: THE INITIATIVE (2007) #18",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/49104",
              "name": "Avengers: The Initiative (2007) #18 - Int",
              "type": "interiorStory"
            }
          ],
          "returned": 2
        },
        "events": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/22299/events",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/269",
              "name": "Secret Invasion"
            }
          ],
          "returned": 1
        }
      },
      {
        "id": 22300,
        "digitalId": 0,
        "title": "Avengers: The Initiative (2007) #18 (ZOMBIE VARIANT)",
        "issueNumber": 18,
        "variantDescription": "ZOMBIE VARIANT",
        "description": "SECRET INVASION TIE-IN!\r<br>THE EXPLOSIVE FINALE STARTS HERE!\r<br>Now that the KILL KREW knows Skrullowjacket's master plan, can they stop the TRUE purpose of the Fifty State Initiative? Plus:  It's THOR GIRL vs. ULTRA GIRL!  One is more than she appears to be... and the other's a Skrull. And, after fourteen issues, are we REALLY going to unmask MUTANT ZERO?!\r<br>Rated T+ ...$2.99\r<br>",
        "modified": "-0001-11-30T00:00:00-0500",
        "isbn": "",
        "upc": "5960606084-01821",
        "diamondCode": "AUG082378",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 32,
        "textObjects": [
          {
            "type": "issue_solicit_text",
            "language": "en-us",
            "text": "SECRET INVASION TIE-IN!\r<br>THE EXPLOSIVE FINALE STARTS HERE!\r<br>Now that the KILL KREW knows Skrullowjacket's master plan, can they stop the TRUE purpose of the Fifty State Initiative? Plus:  It's THOR GIRL vs. ULTRA GIRL!  One is more than she appears to be... and the other's a Skrull. And, after fourteen issues, are we REALLY going to unmask MUTANT ZERO?!\r<br>Rated T+ ...$2.99\r<br>"
          }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/22300",
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/issue/22300/avengers_the_initiative_2007_18_zombie_variant/zombie_variant?utm_campaign=apiRef&utm_source=95325aa111902ebfca44e3550d78161e"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/1945",
          "name": "Avengers: The Initiative (2007 - 2010)"
        },
        "variants": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/22299",
            "name": "Avengers: The Initiative (2007) #18"
          }
        ],
        "collections": [],
        "collectedIssues": [],
        "dates": [
          {
            "type": "onsaleDate",
            "date": "2008-10-29T00:00:00-0400"
          },
          {
            "type": "focDate",
            "date": "2008-10-09T00:00:00-0400"
          }
        ],
        "prices": [
          {
            "type": "printPrice",
            "price": 2.99
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/1/10/4e94a23255996",
          "extension": "jpg"
        },
        "images": [
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/1/10/4e94a23255996",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/20/4bb63aa561aa0",
            "extension": "jpg"
          }
        ],
        "creators": {
          "available": 8,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/22300/creators",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/2133",
              "name": "Tom Brevoort",
              "role": "editor"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
              "name": "Vc Joe Caramagna",
              "role": "letterer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/1054",
              "name": "Juan Doe",
              "role": "penciller (cover)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/11765",
              "name": "Christos Gage",
              "role": "writer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/12983",
              "name": "Dan Slott",
              "role": "writer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/548",
              "name": "Andrew Hennessy",
              "role": "inker"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/4981",
              "name": "Steve Kurth",
              "role": "penciller"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/1405",
              "name": "Matt Milla",
              "role": "colorist"
            }
          ],
          "returned": 8
        },
        "characters": {
          "available": 9,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/22300/characters",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011334",
              "name": "3-D Man"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010802",
              "name": "Ant-Man (Eric O'Grady)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010823",
              "name": "Cloud 9"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009284",
              "name": "Dum Dum Dugan"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010702",
              "name": "Gravity"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011490",
              "name": "Hank Pym"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010818",
              "name": "Komodo (Melati Kusuma)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009599",
              "name": "Skrulls"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011057",
              "name": "Slapstick"
            }
          ],
          "returned": 9
        },
        "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/22300/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/49105",
              "name": "Avengers: The Initiative (2007) #18, Zombie Variant",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/49106",
              "name": "Avengers: The Initiative (2007) #18, Zombie Variant - Int",
              "type": "interiorStory"
            }
          ],
          "returned": 2
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/22300/events",
          "items": [],
          "returned": 0
        }
      },
      {
        "id": 21975,
        "digitalId": 10721,
        "title": "Avengers: The Initiative (2007) #17",
        "issueNumber": 17,
        "variantDescription": "",
        "description": "Join Mutant Zero, Trauma, Bengal, Constrictor, and Ant-Man as they undertake this war's most dangerous mission: to take out the Skrull Spider-Woman! Plus, a new Avenger and more clues as to Mutant Zero's identity!",
        "modified": "2014-08-05T14:09:31-0400",
        "isbn": "",
        "upc": "5960606084-01711",
        "diamondCode": "JUL082310",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 32,
        "textObjects": [
          {
            "type": "issue_preview_text",
            "language": "en-us",
            "text": "Join Mutant Zero, Trauma, Bengal, Constrictor, and Ant-Man as they undertake this war's most dangerous mission: to take out the Skrull Spider-Woman! Plus, a new Avenger and more clues as to Mutant Zero's identity!"
          },
          {
            "type": "issue_solicit_text",
            "language": "en-us",
            "text": "SECRET INVASION TIE-IN\r<br>NEW CLUES TO MUTANT ZERO'S IDENTITY AND AN AVENGER RETURNS!\r<br>Camp Hammond has been overrun, not just by the occupying Skrull army, but by the SKRULL QUEEN, herself!  Well guess what?  That's just what the SHADOW INITIATIVE wanted!  Join MUTANT ZERO, TRAUMA, BENGAL, CONSTRICTOR, and ANT-MAN as they try this war's most dangerous mission: to take out the SKRULL-SPIDER-WOMAN!  That IS why you stayed behind, right ANT-MAN? Also: As 3-D MAN and the KILL KREW carve a green, bloody swath across America, their numbers continue to grow.  And in this issue, a classic AVENGER signs up-- and joins the AVENGERS: INITIATIVE ongoing cast!\r<br>Rated T+ ...$2.99\r<br>"
          }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/21975",
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/issue/21975/avengers_the_initiative_2007_17?utm_campaign=apiRef&utm_source=95325aa111902ebfca44e3550d78161e"
          },
          {
            "type": "purchase",
            "url": "http://comicstore.marvel.com/Avengers-The-Initiative-17/digital-comic/10721?utm_campaign=apiRef&utm_source=95325aa111902ebfca44e3550d78161e"
          },
          {
            "type": "reader",
            "url": "http://marvel.com/digitalcomics/view.htm?iid=10721&utm_campaign=apiRef&utm_source=95325aa111902ebfca44e3550d78161e"
          },
          {
            "type": "inAppLink",
            "url": "https://applink.marvel.com/issue/10721?utm_campaign=apiRef&utm_source=95325aa111902ebfca44e3550d78161e"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/1945",
          "name": "Avengers: The Initiative (2007 - 2010)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
          {
            "type": "onsaleDate",
            "date": "2008-09-24T00:00:00-0400"
          },
          {
            "type": "focDate",
            "date": "2008-09-04T00:00:00-0400"
          },
          {
            "type": "unlimitedDate",
            "date": "2008-10-29T00:00:00-0400"
          },
          {
            "type": "digitalPurchaseDate",
            "date": "2011-08-09T00:00:00-0400"
          }
        ],
        "prices": [
          {
            "type": "printPrice",
            "price": 2.99
          },
          {
            "type": "digitalPurchasePrice",
            "price": 1.99
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/a0/58dd03dc2ec00",
          "extension": "jpg"
        },
        "images": [
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/a0/58dd03dc2ec00",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/50/4bb676b26c606",
            "extension": "jpg"
          }
        ],
        "creators": {
          "available": 6,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/21975/creators",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/2133",
              "name": "Tom Brevoort",
              "role": "editor"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
              "name": "Vc Joe Caramagna",
              "role": "letterer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/11765",
              "name": "Christos Gage",
              "role": "writer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/12983",
              "name": "Dan Slott",
              "role": "writer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/8706",
              "name": "Jay David Ramos",
              "role": "colorist"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/8584",
              "name": "Harvey Tolibao",
              "role": "inker"
            }
          ],
          "returned": 6
        },
        "characters": {
          "available": 13,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/21975/characters",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011334",
              "name": "3-D Man"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010802",
              "name": "Ant-Man (Eric O'Grady)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009165",
              "name": "Avengers"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010829",
              "name": "Bengal"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009245",
              "name": "Constrictor"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011490",
              "name": "Hank Pym"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009376",
              "name": "Jocasta"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010818",
              "name": "Komodo (Melati Kusuma)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009471",
              "name": "Nick Fury"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009599",
              "name": "Skrulls"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009608",
              "name": "Spider-Woman (Jessica Drew)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010822",
              "name": "Trauma"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009737",
              "name": "Yellowjacket (Hank Pym)"
            }
          ],
          "returned": 13
        },
        "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/21975/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/48361",
              "name": "AVENGERS: THE INITIATIVE (2007) #17",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/48362",
              "name": "Avengers: The Initiative (2007) #17 - Int",
              "type": "interiorStory"
            }
          ],
          "returned": 2
        },
        "events": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/21975/events",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/269",
              "name": "Secret Invasion"
            }
          ],
          "returned": 1
        }
      },
      {
        "id": 21741,
        "digitalId": 10718,
        "title": "Avengers: The Initiative (2007) #16",
        "issueNumber": 16,
        "variantDescription": "",
        "description": "The Skrull Kill Krew is back! And they're ready to kill, maim, torture, and butcher every mother lovin' Skrull out there! Also, back at Camp Hammond, Ant-Man is in a giant world of trouble.",
        "modified": "2014-08-05T14:09:28-0400",
        "isbn": "",
        "upc": "5960606084-01611",
        "diamondCode": "JUN082352",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 32,
        "textObjects": [
          {
            "type": "issue_preview_text",
            "language": "en-us",
            "text": "The Skrull Kill Krew is back! And they're ready to kill, maim, torture, and butcher every mother lovin' Skrull out there! Also, back at Camp Hammond, Ant-Man is in a giant world of trouble."
          },
          {
            "type": "issue_solicit_text",
            "language": "en-us",
            "text": "SECRET INVASION TIE-IN\r<br>For months you've heard one question over and over again: \"Who do you trust?\"  Well we've got your answer right here, Earth-boy: TRUST THE KILL KREW! Yeah, that's right, the SKRULL KILL KREW are back!  And they're ready to kill, maim, torture, and butcher every mother lovin' Skrull out there! Also, back at Camp Hammond, ANT-MAN is in a giant world of trouble-the biggest kind of trouble the SECRET INVASION can dish out.\r<br>Rated T+ ...$2.99\r<br>"
          }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/21741",
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/issue/21741/avengers_the_initiative_2007_16?utm_campaign=apiRef&utm_source=95325aa111902ebfca44e3550d78161e"
          },
          {
            "type": "purchase",
            "url": "http://comicstore.marvel.com/Avengers-The-Initiative-16/digital-comic/10718?utm_campaign=apiRef&utm_source=95325aa111902ebfca44e3550d78161e"
          },
          {
            "type": "reader",
            "url": "http://marvel.com/digitalcomics/view.htm?iid=10718&utm_campaign=apiRef&utm_source=95325aa111902ebfca44e3550d78161e"
          },
          {
            "type": "inAppLink",
            "url": "https://applink.marvel.com/issue/10718?utm_campaign=apiRef&utm_source=95325aa111902ebfca44e3550d78161e"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/1945",
          "name": "Avengers: The Initiative (2007 - 2010)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
          {
            "type": "onsaleDate",
            "date": "2008-08-27T00:00:00-0400"
          },
          {
            "type": "focDate",
            "date": "2008-08-07T00:00:00-0400"
          },
          {
            "type": "unlimitedDate",
            "date": "2009-07-07T00:00:00-0400"
          },
          {
            "type": "digitalPurchaseDate",
            "date": "2011-08-09T00:00:00-0400"
          }
        ],
        "prices": [
          {
            "type": "printPrice",
            "price": 2.99
          },
          {
            "type": "digitalPurchasePrice",
            "price": 1.99
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/10/58dd01dbc6e51",
          "extension": "jpg"
        },
        "images": [
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/10/58dd01dbc6e51",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/80/4c361ae117d12",
            "extension": "jpg"
          }
        ],
        "creators": {
          "available": 6,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/21741/creators",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/2133",
              "name": "Tom Brevoort",
              "role": "editor"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
              "name": "Vc Joe Caramagna",
              "role": "letterer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/1133",
              "name": "Stefano Caselli",
              "role": "inker"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/11765",
              "name": "Christos Gage",
              "role": "writer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/12983",
              "name": "Dan Slott",
              "role": "writer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/8949",
              "name": "Luca Malisan",
              "role": "colorist"
            }
          ],
          "returned": 6
        },
        "characters": {
          "available": 11,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/21741/characters",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011334",
              "name": "3-D Man"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009165",
              "name": "Avengers"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009180",
              "name": "Beta-Ray Bill"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011490",
              "name": "Hank Pym"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009538",
              "name": "Iron Patriot (James Rhodes)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010818",
              "name": "Komodo (Melati Kusuma)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009471",
              "name": "Nick Fury"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009662",
              "name": "Thing"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010822",
              "name": "Trauma"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1017834",
              "name": "War Machine (James Rhodes)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009737",
              "name": "Yellowjacket (Hank Pym)"
            }
          ],
          "returned": 11
        },
        "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/21741/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/47792",
              "name": "AVENGERS: THE INITIATIVE (2007) #16",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/47793",
              "name": "Avengers: The Initiative (2007) #16 - Int",
              "type": "interiorStory"
            }
          ],
          "returned": 2
        },
        "events": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/21741/events",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/269",
              "name": "Secret Invasion"
            }
          ],
          "returned": 1
        }
      },
      {
        "id": 21546,
        "digitalId": 10716,
        "title": "Avengers: The Initiative (2007) #15",
        "issueNumber": 15,
        "variantDescription": "",
        "description": "It's up to the Initiative to face off against the first major Skrull strike force! And on the battle field, the cadet with the biggest secret has to choose which side he's really on. Plus, a new low for Ant-Man and a new danger for War Machine!",
        "modified": "2014-08-05T14:09:27-0400",
        "isbn": "",
        "upc": "5960606084-01511",
        "diamondCode": "MAY082306",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 32,
        "textObjects": [
          {
            "type": "issue_preview_text",
            "language": "en-us",
            "text": "It's up to the Initiative to face off against the first major Skrull strike force! And on the battle field, the cadet with the biggest secret has to choose which side he's really on. Plus, a new low for Ant-Man and a new danger for War Machine!"
          },
          {
            "type": "issue_solicit_text",
            "language": "en-us",
            "text": "SECRET INVASION TIE-IN!\r<br>\"The Only Good Skrull...\"\r<br>With the NEW AVENGERS and the MIGHTY AVENGERS trapped in the Savage Land, it's up to the AVENGERS INITIATIVE to face off against the first major strike of the Skrull Invasion!  There, on the field of battle, the cadet with the biggest secret has to choose how red (or green) his blood really is.  Heroes will fall.  Heroes will die.  And one shall rise. All THIS and:  A new cowardly low for ANT-MAN!  A new danger for WAR MACHINE!  And 3-D MAN gains a \"killer\" new \"krew\"!\r<br>Rated T+ ...$2.99\r<br>"
          }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/21546",
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/issue/21546/avengers_the_initiative_2007_15?utm_campaign=apiRef&utm_source=95325aa111902ebfca44e3550d78161e"
          },
          {
            "type": "purchase",
            "url": "http://comicstore.marvel.com/Avengers-The-Initiative-15/digital-comic/10716?utm_campaign=apiRef&utm_source=95325aa111902ebfca44e3550d78161e"
          },
          {
            "type": "reader",
            "url": "http://marvel.com/digitalcomics/view.htm?iid=10716&utm_campaign=apiRef&utm_source=95325aa111902ebfca44e3550d78161e"
          },
          {
            "type": "inAppLink",
            "url": "https://applink.marvel.com/issue/10716?utm_campaign=apiRef&utm_source=95325aa111902ebfca44e3550d78161e"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/1945",
          "name": "Avengers: The Initiative (2007 - 2010)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
          {
            "type": "onsaleDate",
            "date": "2008-07-23T00:00:00-0400"
          },
          {
            "type": "focDate",
            "date": "2008-07-03T00:00:00-0400"
          },
          {
            "type": "unlimitedDate",
            "date": "2009-06-02T00:00:00-0400"
          },
          {
            "type": "digitalPurchaseDate",
            "date": "2011-08-09T00:00:00-0400"
          }
        ],
        "prices": [
          {
            "type": "printPrice",
            "price": 2.99
          },
          {
            "type": "digitalPurchasePrice",
            "price": 1.99
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/c0/58dbda827bec8",
          "extension": "jpg"
        },
        "images": [
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/c0/58dbda827bec8",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/90/4bb79730b65d5",
            "extension": "jpg"
          }
        ],
        "creators": {
          "available": 8,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/21546/creators",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/2133",
              "name": "Tom Brevoort",
              "role": "editor"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/694",
              "name": "Mark Brooks",
              "role": "penciller (cover)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
              "name": "Vc Joe Caramagna",
              "role": "letterer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/11765",
              "name": "Christos Gage",
              "role": "writer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/12983",
              "name": "Dan Slott",
              "role": "writer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/8706",
              "name": "Jay David Ramos",
              "role": "colorist"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/627",
              "name": "Christina Strain",
              "role": "colorist"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/8584",
              "name": "Harvey Tolibao",
              "role": "penciller"
            }
          ],
          "returned": 8
        },
        "characters": {
          "available": 8,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/21546/characters",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011334",
              "name": "3-D Man"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009165",
              "name": "Avengers"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009316",
              "name": "Gauntlet (Joseph Green)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011490",
              "name": "Hank Pym"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009538",
              "name": "Iron Patriot (James Rhodes)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009599",
              "name": "Skrulls"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1017834",
              "name": "War Machine (James Rhodes)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009737",
              "name": "Yellowjacket (Hank Pym)"
            }
          ],
          "returned": 8
        },
        "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/21546/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/47498",
              "name": "AVENGERS: THE INITIATIVE (2007) #15",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/47499",
              "name": "Avengers: The Initiative (2007) #15 - Int",
              "type": "interiorStory"
            }
          ],
          "returned": 2
        },
        "events": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/21546/events",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/269",
              "name": "Secret Invasion"
            }
          ],
          "returned": 1
        }
      },
      {
        "id": 24571,
        "digitalId": 0,
        "title": "Avengers: The Initiative (2007) #14 (SPOTLIGHT VARIANT)",
        "issueNumber": 14,
        "variantDescription": "SPOTLIGHT VARIANT",
        "description": null,
        "modified": "-0001-11-30T00:00:00-0500",
        "isbn": "",
        "upc": "5960606084-01421",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 32,
        "textObjects": [],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/24571",
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/issue/24571/avengers_the_initiative_2007_14_spotlight_variant/spotlight_variant?utm_campaign=apiRef&utm_source=95325aa111902ebfca44e3550d78161e"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/1945",
          "name": "Avengers: The Initiative (2007 - 2010)"
        },
        "variants": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/21366",
            "name": "Avengers: The Initiative (2007) #14"
          }
        ],
        "collections": [],
        "collectedIssues": [],
        "dates": [
          {
            "type": "onsaleDate",
            "date": "2008-06-25T00:00:00-0400"
          },
          {
            "type": "focDate",
            "date": "2008-06-05T00:00:00-0400"
          }
        ],
        "prices": [
          {
            "type": "printPrice",
            "price": 2.99
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/a/30/4e948fb5e9b52",
          "extension": "jpg"
        },
        "images": [
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/a/30/4e948fb5e9b52",
            "extension": "jpg"
          }
        ],
        "creators": {
          "available": 7,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/24571/creators",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/2133",
              "name": "Tom Brevoort",
              "role": "editor"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/694",
              "name": "Mark Brooks",
              "role": "penciller (cover)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
              "name": "Vc Joe Caramagna",
              "role": "letterer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/1133",
              "name": "Stefano Caselli",
              "role": "penciller"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/11765",
              "name": "Christos Gage",
              "role": "writer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/12983",
              "name": "Dan Slott",
              "role": "writer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/1134",
              "name": "Daniele Rudoni",
              "role": "colorist"
            }
          ],
          "returned": 7
        },
        "characters": {
          "available": 7,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/24571/characters",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011334",
              "name": "3-D Man"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010802",
              "name": "Ant-Man (Eric O'Grady)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011490",
              "name": "Hank Pym"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009599",
              "name": "Skrulls"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009639",
              "name": "Super-Skrull"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009670",
              "name": "Tigra (Greer Nelson)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010822",
              "name": "Trauma"
            }
          ],
          "returned": 7
        },
        "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/24571/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/54370",
              "name": "Avengers: The Initiative (2007) #14, Spotlight Variant",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/54371",
              "name": "Avengers: The Initiative (2007) #14, Spotlight Variant - Int",
              "type": "interiorStory"
            }
          ],
          "returned": 2
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/24571/events",
          "items": [],
          "returned": 0
        }
      },
      {
        "id": 21366,
        "digitalId": 10715,
        "title": "Avengers: The Initiative (2007) #14",
        "issueNumber": 14,
        "variantDescription": "",
        "description": "The fates of The Initiative, the United States, and Planet Earth hang in the balance. Plus: Former Avenger, Delroy Garret, assumes the mantle and arsenal of Earth's greatest Skrull-Hunter, The 3-D Man.",
        "modified": "2014-08-05T14:09:26-0400",
        "isbn": "",
        "upc": "5960606084-01411",
        "diamondCode": "APR082297",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 32,
        "textObjects": [
          {
            "type": "issue_preview_text",
            "language": "en-us",
            "text": "The fates of The Initiative, the United States, and Planet Earth hang in the balance. Plus: Former Avenger, Delroy Garret, assumes the mantle and arsenal of Earth's greatest Skrull-Hunter, The 3-D Man."
          },
          {
            "type": "issue_solicit_text",
            "language": "en-us",
            "text": "SECRET INVASION TIE-IN\r<br>\"We Have Met the Enemy and He Is Us!\"\r<br>During the INFILTRATION, a Skrull at the heart of the Camp Hammond said these words: \"It won't be long until we have a Skrull in every state! \"Now that Skrull stands revealed and the fate of The Initiative, the United States, and Planet Earth hang in the balance. Plus:  Former Avenger, Delroy Garret, assumes the mantle and arsenal of Earth's greatest Skrull-Hunter, THE 3-D MAN.  He's here to chew bubblegum and kick some Skrull-@$$.  And he's all out of bubblegum.\r<br>Rated T+ ...$2.99 \r<br>"
          }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/21366",
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/issue/21366/avengers_the_initiative_2007_14?utm_campaign=apiRef&utm_source=95325aa111902ebfca44e3550d78161e"
          },
          {
            "type": "purchase",
            "url": "http://comicstore.marvel.com/Avengers-The-Initiative-14/digital-comic/10715?utm_campaign=apiRef&utm_source=95325aa111902ebfca44e3550d78161e"
          },
          {
            "type": "reader",
            "url": "http://marvel.com/digitalcomics/view.htm?iid=10715&utm_campaign=apiRef&utm_source=95325aa111902ebfca44e3550d78161e"
          },
          {
            "type": "inAppLink",
            "url": "https://applink.marvel.com/issue/10715?utm_campaign=apiRef&utm_source=95325aa111902ebfca44e3550d78161e"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/1945",
          "name": "Avengers: The Initiative (2007 - 2010)"
        },
        "variants": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/24571",
            "name": "Avengers: The Initiative (2007) #14 (SPOTLIGHT VARIANT)"
          }
        ],
        "collections": [],
        "collectedIssues": [],
        "dates": [
          {
            "type": "onsaleDate",
            "date": "2008-06-25T00:00:00-0400"
          },
          {
            "type": "focDate",
            "date": "2008-06-05T00:00:00-0400"
          },
          {
            "type": "unlimitedDate",
            "date": "2009-02-10T00:00:00-0500"
          },
          {
            "type": "digitalPurchaseDate",
            "date": "2011-08-09T00:00:00-0400"
          }
        ],
        "prices": [
          {
            "type": "printPrice",
            "price": 2.99
          },
          {
            "type": "digitalPurchasePrice",
            "price": 1.99
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/60/58dbce634ea70",
          "extension": "jpg"
        },
        "images": [
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/60/58dbce634ea70",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/30/4bb7c84053318",
            "extension": "jpg"
          }
        ],
        "creators": {
          "available": 6,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/21366/creators",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/2133",
              "name": "Tom Brevoort",
              "role": "editor"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
              "name": "Vc Joe Caramagna",
              "role": "letterer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/1133",
              "name": "Stefano Caselli",
              "role": "inker"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/11765",
              "name": "Christos Gage",
              "role": "writer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/12983",
              "name": "Dan Slott",
              "role": "writer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/1134",
              "name": "Daniele Rudoni",
              "role": "colorist"
            }
          ],
          "returned": 6
        },
        "characters": {
          "available": 9,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/21366/characters",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011334",
              "name": "3-D Man"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010802",
              "name": "Ant-Man (Eric O'Grady)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009165",
              "name": "Avengers"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011490",
              "name": "Hank Pym"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009599",
              "name": "Skrulls"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009639",
              "name": "Super-Skrull"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009670",
              "name": "Tigra (Greer Nelson)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010822",
              "name": "Trauma"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009737",
              "name": "Yellowjacket (Hank Pym)"
            }
          ],
          "returned": 9
        },
        "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/21366/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/47184",
              "name": "AVENGERS: THE INITIATIVE (2007) #14",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/47185",
              "name": "Avengers: The Initiative (2007) #14 - Int",
              "type": "interiorStory"
            }
          ],
          "returned": 2
        },
        "events": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/21366/events",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/269",
              "name": "Secret Invasion"
            }
          ],
          "returned": 1
        }
      },
      {
        "id": 8500,
        "digitalId": 23291,
        "title": "Deadpool (1997) #44",
        "issueNumber": 44,
        "variantDescription": "",
        "description": null,
        "modified": "2013-06-05T11:24:31-0400",
        "isbn": "",
        "upc": "",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 0,
        "textObjects": [],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/8500",
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/issue/8500/deadpool_1997_44?utm_campaign=apiRef&utm_source=95325aa111902ebfca44e3550d78161e"
          },
          {
            "type": "purchase",
            "url": "http://comicstore.marvel.com/Deadpool-44/digital-comic/23291?utm_campaign=apiRef&utm_source=95325aa111902ebfca44e3550d78161e"
          },
          {
            "type": "reader",
            "url": "http://marvel.com/digitalcomics/view.htm?iid=23291&utm_campaign=apiRef&utm_source=95325aa111902ebfca44e3550d78161e"
          },
          {
            "type": "inAppLink",
            "url": "https://applink.marvel.com/issue/23291?utm_campaign=apiRef&utm_source=95325aa111902ebfca44e3550d78161e"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/2005",
          "name": "Deadpool (1997 - 2002)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
          {
            "type": "onsaleDate",
            "date": "2000-09-01T00:00:00-0400"
          },
          {
            "type": "focDate",
            "date": "-0001-11-30T00:00:00-0500"
          },
          {
            "type": "unlimitedDate",
            "date": "2012-07-25T00:00:00-0400"
          },
          {
            "type": "digitalPurchaseDate",
            "date": "2013-01-29T00:00:00-0500"
          }
        ],
        "prices": [
          {
            "type": "printPrice",
            "price": 0
          },
          {
            "type": "digitalPurchasePrice",
            "price": 1.99
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/80/4f206cc0ac28a",
          "extension": "jpg"
        },
        "images": [
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/80/4f206cc0ac28a",
            "extension": "jpg"
          }
        ],
        "creators": {
          "available": 6,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/8500/creators",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/4135",
              "name": "Shannon Blanchard",
              "role": "colorist"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/5268",
              "name": "Jim Calafiore",
              "role": "penciler"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/452",
              "name": "Virtual Calligr",
              "role": "letterer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/12581",
              "name": "Chris Eliopoulos",
              "role": "letterer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/235",
              "name": "Jon Holdredge",
              "role": "inker"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/110",
              "name": "Christopher Priest",
              "role": "writer"
            }
          ],
          "returned": 6
        },
        "characters": {
          "available": 8,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/8500/characters",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011334",
              "name": "3-D Man"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009245",
              "name": "Constrictor"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009268",
              "name": "Deadpool"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011072",
              "name": "Edwin Jarvis"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011490",
              "name": "Hank Pym"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009368",
              "name": "Iron Man"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009583",
              "name": "She-Hulk (Jennifer Walters)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010669",
              "name": "Titania"
            }
          ],
          "returned": 8
        },
        "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/8500/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/66410",
              "name": "Deadpool (1997) #44",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/96303",
              "name": "Deadpool (1997) #44",
              "type": "interiorStory"
            }
          ],
          "returned": 2
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/8500/events",
          "items": [],
          "returned": 0
        }
      },
      {
        "id": 10225,
        "digitalId": 0,
        "title": "Marvel Premiere (1972) #37",
        "issueNumber": 37,
        "variantDescription": "",
        "description": null,
        "modified": "-0001-11-30T00:00:00-0500",
        "isbn": "",
        "upc": "",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 0,
        "textObjects": [],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/10225",
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/issue/10225/marvel_premiere_1972_37?utm_campaign=apiRef&utm_source=95325aa111902ebfca44e3550d78161e"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/2045",
          "name": "Marvel Premiere (1972 - 1981)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
          {
            "type": "onsaleDate",
            "date": "1977-08-01T00:00:00-0400"
          },
          {
            "type": "focDate",
            "date": "-0001-11-30T00:00:00-0500"
          }
        ],
        "prices": [
          {
            "type": "printPrice",
            "price": 0
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
          "extension": "jpg"
        },
        "images": [],
        "creators": {
          "available": 5,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/10225/creators",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/1220",
              "name": "Jim Craig",
              "role": "penciler"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/13094",
              "name": "Dave Hunt",
              "role": "inker"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/1759",
              "name": "Joe Rosen",
              "role": "letterer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/2909",
              "name": "Roy Thomas",
              "role": "writer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/1777",
              "name": "Don Warfield",
              "role": "colorist"
            }
          ],
          "returned": 5
        },
        "characters": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/10225/characters",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011334",
              "name": "3-D Man"
            }
          ],
          "returned": 1
        },
        "stories": {
          "available": 4,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/10225/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/19951",
              "name": "Cover #19951",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/19952",
              "name": "Code-Name:  The Cold Warrior!",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/151209",
              "name": "cover from Marvel Premiere (1972) #37",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/151210",
              "name": "story from Marvel Premiere (1972) #37",
              "type": "interiorStory"
            }
          ],
          "returned": 4
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/10225/events",
          "items": [],
          "returned": 0
        }
      }
    ]
  ],
}

test('renders correct comic item', () => {
  render(<Comics {...props} />);
  const characterElement = screen.getAllByRole('img');
  expect(characterElement).toHaveLength(props.comics.length);
});
