import { useContext } from "react";
import { RulebookContext } from "../context/rulebookContext";
import Break from "../components/break/break";
import ChapterIntroSpread from "../components/chapter-intro-spread/chapter-intro-spread";
import Section from "../components/section/section";
import Crosslink from "../components/crosslink/crosslink";

function ChapterIntroduction() {
  const { topicMap } = useContext(RulebookContext);
  const linkMap = topicMap.current;

  return (
    <Section
      coordinates={"1"}
      header="Introduction"
      introContent={
        <ChapterIntroSpread
          chapterNumber={1}
          title="Introduction"
          leftPageContent={
            <>
              <h2>A World Heating Up</h2>
              <p>We've crossed the tipping point.</p>
              <p>
                Accelerating changes to the climate are hitting harder and faster than anyone predicted. Unpredictable
                natural disasters, destructive storms, unprecedented floods, widespread crop failures, longterm
                droughts, and lethal heat waves are daily news stories. The ensuing societal effects are just as
                dramatic. Failing economies, looming wars, global refugee crises, abandoned cities, and reactionary
                backlashes are rippling across the globe in chain reactions. Fueled by these tensions new counter
                cultures, rebellions, and social movements are growing explosively and creating new communities outside
                of the status quo. Amidst the growing chaos, almost everyone has heard rumors or seen blurry videos of
                things they can't explain.
              </p>
            </>
          }
          rightPageContent={
            <>
              <h2>A World Hidden Within</h2>
              <p>You've gone down the rabbit hole.</p>
              <p>
                Maybe you've always suspected that there was something more to the world, that things were never quite
                as they seemed. But now, you've felt it. Seen it hiding behind the world you once knew. Realized it is a
                part of you. A part of everyone. You're only just beginning to sense it, but a hidden intangible world
                exists parallel to the one we know, and in it resides your parallel hidden body. You can feel it. You
                can reach out and feel the hidden bodies of others. Yet no one seems to ever realize it's there. It was
                always there, always a necessary part of you. But now that you're beginning to interact with it, you're
                discovering that it can help you do things you never thought possible.
              </p>
            </>
          }
        ></ChapterIntroSpread>
      }
    >
      <Section header="Basics">
        <p>
          Cascade Effect is a table top roleplaying game. To play it, get a group of friends together and choose one of
          you to be the game master. The game master tells the story, every other player controls a single character in
          that story. The player characters work together as a team of protagonists, navigating the near future world of
          Cascade Effect and unraveling its mysteries and surviving its dangers.
        </p>
        <Section header="Player Characters">
          <p>
            The players roleplay characters that are about to embark on an adventure revealing a world much more
            complex, strange, and dangerous than they ever expected. Not only are they discovering secrets about the
            world, they're also starting to discover new abilities that seem to come from their connection to a
            mysterious intangible realm. The players act out what their characters words and describe their actions.
          </p>
          <p>
            The characters know what the GM describes about the scene and setting, but they're also people with
            background knowledge about the world. Players are the primary authors of their character's backstory (within
            the bounds what's reasonable in the setting), and should act according to what their character would know
            given their history.
          </p>
        </Section>
        <Section header="The Game Master">
          <p>
            The game master describes the situations and events characters experience. They are in control of all of the
            people and challenges that characters encounter. The game master's job is to guide the characters through an
            interesting and challenging adventure and to keep the story moving forward.
          </p>
          <p>
            The GM knows everything about the fictional world the story is taking place in. Anything the GM describes
            about the world is true, whether it was planned or improvised it on the spot. Details about the world and
            its secrets and possible adventures are described in the last section of this rulebook. These pages are
            meant for the GM's eyes only and contain details on the secret, mysterious, or supernatural aspects of the
            world that most people are unaware of.
          </p>
          <p>
            The GM can start the game with the characters' origin stories on how they started entering the secret parts
            of the world, or they could jump right into the action with characters that are already an established group
            entwined in secrets and intrigue.
          </p>
          <p>
            The GM should also have a good sense of the rules and instruct other players on how to resolve situations.
            But don't lose momentum a lot of time looking for a rule, just improvise and look it up later for next time.
          </p>
        </Section>
      </Section>
      <Section header="The Setting">
        <Section header="A World Heating Up">
          <Section header="Rising Temperatures">
            <p>
              Surpassing several critical tipping points has caused climate change to hit harder and faster than
              predicted. Deadly heat waves, droughts, storms, and crop failures are increasingly common and severe. The
              most affected are those least able to react.
            </p>
          </Section>
          <Section header="Rising Tides">
            <p>
              Receding coastlines are a growing chronic issue while unprecedented storm surges and inland floods create
              acute and increasingly severe disasters. Destroyed properties and livelihoods are driving the displacement
              of massive populations.
            </p>
          </Section>
          <Section header="Rising Tensions">
            <p>
              Reactionary backlash and regulatory capture prevent nations from addressing the situation. The global
              precariat is the largest demographic and a fertile ground for new countercultures. Mass protest is a daily
              fact and civil wars loom in the future.
            </p>
          </Section>
        </Section>

        <Section header="A World Within" isInset>
          <Section header="Hidden Space, Hidden Body">
            <p>
              Between every point of the space you're familiar with, exists a second hidden space. It is normally
              undetectable, but your senses are beginning to find a connection to it that is mediated through a second
              intangible body hidden in this space.
            </p>
          </Section>
          <Section header="Dissociative Experiences">
            <p>
              The mind requires contact with the hidden body. When this connection is stressed, loss of awareness and
              memory result for most people, but for those with stronger ties, psychedelic dissociative experiences hint
              at the true nature of the connection.
            </p>
          </Section>
          <Section header="Hints of New Abilities">
            <p>
              With awareness of the hidden body, one can harness the resources it provides and use them in physical
              space to accomplish more in less time. When truly synchronized with the hidden body, one can transcend the
              limits of the body and its surroundings.
            </p>
          </Section>
        </Section>

        <Section header="A World of Secrets" isClassified>
          <Section header="Secret Organizations">
            <p>
              Many nations have secret intelligence agencies, but orchestrating them all is the Schedule and its
              auditors. Meanwhile, groups with goals ranging from revealing secrets to accelerating societal collapse,
              recruit and manipulate behind the scenes.
            </p>
          </Section>
          <Section header="Mysterious Phenomena">
            <p>
              The list of strange happenings is growing. Locations that induce compulsions. Self-assembling structures.
              Phantom lights and images follow people. Apparent hauntings. Devices of unknown origin. People appear from
              nowhere. A 1:1 simulation of Earth.
            </p>
          </Section>
          <Section header="Inhuman Entities">
            <p>
              Hidden space is full of semi-aware beings. By manifesting forces, assembling bodies, or possessing humans,
              they sometimes find ways to become less incorporeal. Meanwhile, other beings that definitely aren't from
              around here lurk in dark places.
            </p>
          </Section>
        </Section>
      </Section>
      <Section header="Basic Gameplay">
        <p>
          Gameplay consists of the GM and players collaborating on a story. The GM presents a situation, and the players
          say what their characters are doing. Most of the time, anything a player describes their character doing just
          happens. However, if the action described is difficult for the character in some way, the GM will assign it a
          <Crosslink target={linkMap.DifficultyandContext}>Difficulty</Crosslink> number and you will resolve a
          Challenge. The basic details of resolving a challenge are presented here, for more details see chapter 3.
        </p>
        <p>
          To determine if you succeed, and at what cost, you must use your character's
          <Crosslink target={linkMap.Gameplay}>Metabolisms</Crosslink>
          to attempt to beat the <Crosslink target={linkMap.DifficultyandContext}>Difficulty</Crosslink> number. For
          every
          <Crosslink target={linkMap.Challenges}>Challenge</Crosslink>, choose a pairing of one
          <Crosslink target={linkMap.PhysicalMetabolisms}>Physical Metabolism</Crosslink> and one
          <Crosslink target={linkMap.HiddenMetabolisms}>Hidden Metabolism</Crosslink> that you will use to attempt to
          overcome the
          <Crosslink target={linkMap.DifficultyandContext}>Difficulty</Crosslink>.
        </p>
        <Section header="Comparing Difficulty">
          <p>
            Often it is very simple to determine if you succeed. Add up the sum of the current values of your chosen
            Metabolism pairing, this number is referred to as your Progress. If your Progress meets or exceeds the
            Difficulty number then you complete the Challenge successfully.
          </p>
        </Section>
        <Section header="Effort & Metabolisms">
          <p>
            Many <Crosslink target={linkMap.Challenges}>Challenges</Crosslink> will have a set Effort value representing
            how much physical or mental effort the Challenge requires. Some Effort values will require you to spend
            Metabolism points. You spend these points by reducing the Current value of one or both of the involved
            Metabolisms. These spent points can't be used again until they are regained, for example, by resting.
          </p>
          <p>
            When you spend Metabolism points, the amount of Progress created is equal to the number of points spent
            instead of the sum of the current values.
          </p>
        </Section>
        <Section header="Risk & Rolling Dice">
          <p>
            Many <Crosslink target={linkMap.Challenges}>Challenges</Crosslink> will have a set Risk value representing
            how much chance, unpredictability, and things out of your character's control can influence the challenge.
            Certain Risk values will require you to roll dice instead of just counting how successful you are.
          </p>
          <p>
            When a Challenge requires dice, the number of dice you roll is typically equal to how much Progress you
            would have had without the dice. For example, if you would have gotten 4 Progress, instead roll 4 dice. Each
            die you roll is a 6 sided die that has a roughly 50% chance of generating Progress.
          </p>
          <p>
            Each die you roll that lands on 4 or above adds a point of
            <Crosslink target={linkMap.CountingProgress}>Progress</Crosslink> to the results. Any die that comes up 6
            gets rerolled, potentially adding even more{" "}
            <Crosslink target={linkMap.CountingProgress}>Progress</Crosslink>, or even coming up as 6 to reroll again.
            Sum up the total amount of
            <Crosslink target={linkMap.CountingProgress}>Progress</Crosslink> generated by the dice and if it meets or
            exceeds the
            <Crosslink target={linkMap.DifficultyandContext}>Difficulty</Crosslink>, then you succeed.
          </p>
        </Section>
      </Section>
      <Section header="Getting Started">
        <p>
          As a group, you'll have to decide what point to start your story at. This choice determines how powerful your
          starting characters are and how much they know about the secret parts of the world. The recommended starting
          methods are The Origin Story, The Heroic Story, or The Short Story.
        </p>
        <Section header="The Origin Story">
          <p>
            This approach is recommended for groups where most of the players have never played Cascade Effect before.
          </p>
          <p>
            Characters start as ordinary people. Follow the standard character creation steps detailed in the next
            chapter.
          </p>
        </Section>
        <Section header="The Heroic Story">
          <p>This approach is recommended if everyone has played Cascade Effect before.</p>
          <p>
            Characters are already slightly superhuman at the start. An Inciting Incident has already occured. Follow
            the standard character creation steps detailed in the next chapter. Afterwards, each character gets 3
            experience points to spend (or a different amount determined by the
            <Crosslink target={linkMap.TheGameMaster}>GM</Crosslink>).
          </p>
        </Section>
        <Section header="The Short Story">
          <p>Recommended for one shots and short term games.</p>
          <p>
            Skip standard character creation. Instead, characters have 12 points to split between
            <Crosslink target={linkMap.PhysicalMetabolisms}>Physical Metabolisms</Crosslink> scores, with no metabolism
            ending up below 3 or above 6. Choose one Hidden Metabolism that starts with a score of 2 and the rest start
            with a score of 1. Then choose any 9<Crosslink target={linkMap.AdvantageAndDisadvantage}>Traits</Crosslink>{" "}
            for the character. The
            <Crosslink target={linkMap.TheGameMaster}>GM</Crosslink> may also set an amount of experience points to
            spend as well.
          </p>
        </Section>
      </Section>
    </Section>
  );
}

export default ChapterIntroduction;
