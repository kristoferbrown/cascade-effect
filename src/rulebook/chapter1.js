import Break from "../components/break/break";
import ChapterIntro from "../components/chapter-intro/chapter-intro";
import Section from "../components/section/section";
import Crosslink from "../components/crosslink/crosslink";
import { topics } from "../context/rulebookContext";
import Logomark from "../svgs/logomark";

// more up to date than pdf sept 18
function Chapter1() {
  return (
    <Section coordinates={"1"} header="Introduction">
      <ChapterIntro>
        <p>
          In Cascade Effect, players explore a near future collapsing under the weight of a climate that is changing faster than anyone expected.
          Players role-play characters that are about to embark on an adventure that reveals that the world is much more complex, strange, and
          dangerous than they ever thought.
        </p>
        <p>
          Not only are they discovering secrets about the world, they’re also starting to discover new abilities that seem to come from a connection
          to a mysterious intangible realm.
        </p>
        <Logomark />
      </ChapterIntro>

      <Section header="The Player Characters" isChapterIntroColumn>
        <p>
          To play, pick one person to be the game master, the rest of the players create and control a single character in the game. Given a
          situation, the players say what their characters say and describe the actions taken by their characters. The player's job is to create and
          play an interesting character as they embark on an adventure.
        </p>
        <Section header="What Characters Know">
          <p>
            In addition to anything the GM describes, the characters are also normal people that have normal background knowledge about the world.
            Players are the primary authors of their character's background and history (as long as it fits within what the GM says is true about the
            world), and they should act according to what their character would know given their background.
          </p>
          <p>
            In general, characters will be aware of recent history and news in the world. It's the near future, no more than 10 years from now. The
            biggest story connecting all recent events is the consequences of climate change. Unprecedented natural disasters, such as immensely
            destructive storms, flooded coastal cities, global crop failures, droughts, and even lethal heat waves, are occurring earlier and more
            rapidly than predicted. The secondary societal effects of these events are just as dramatic; the news is full of stories on looming wars,
            failing economies, a near-constant global refugee crisis, abandoned cities, and a strong reactionary backlash from governments. New
            counter culture movements are creating new communities outside of the status quo.
          </p>
          <p>Amidst the growing chaos, almost everyone has heard rumors or seen online videos of bizarre events that cannot be explained.</p>
        </Section>
      </Section>

      <Section header="The Game Master" isChapterIntroColumn isClassified>
        <p>
          The game master describes the situations and events characters experience. They are in control of all of the people and challenges that
          characters encounter. The game master's job is to guide the characters through an interesting and challenging adventure and to keep the
          story moving forward.
        </p>
        <Section header="What the Game Master Knows">
          <p>
            The GM knows everything about the fictional world the story is taking place in. Anything the GM describes about the world is true, whether
            they planned it in advance or improvised it on the spot.
          </p>
          <p>
            Details about the world and its secrets and possible adventures are described in the last section of this rulebook. Pages with completely
            black backgrounds are meant to be for the GM's eyes only. These pages contain details pertaining to the top secret, mysterious, or
            supernatural aspects of the world that most people are unaware of.
          </p>
          <p>
            The GM can start the game out with all of the character's origin stories on how they started entering the secret parts of the world, or
            they could jump right into the action with characters that are already an established group that is aware of what is behind some of the
            mysteries.
          </p>
          <p>
            The GM should also have a good sense of the rules of the game, instructing players on how to handle situations that they don't know the
            rules for. But don't lose momentum in the game by spending a lot of time looking for a rule you don't know, just improvise and look it up
            later.
          </p>
        </Section>
      </Section>

      <Break page />

      <Section header="The World of Cascade Effect">
        {/* @TODO use column-span: all; to lay out this bit*/}
        <Section header="The Characters Know a World Heating Up...">
          <Section header="Rising Temperatures">
            <p>
              Surpassing several critical tipping points has caused climate change to hit harder and faster than predicted. Deadly heat waves,
              droughts, storms, and crop failures are increasingly common and severe. The most affected are those least able to react.
            </p>
          </Section>
          <Section header="Rising Tides">
            <p>
              Receding coastlines are a growing chronic issue while unprecedented storm surges and inland floods create acute and increasingly severe
              disasters. Destroyed properties and livelihoods are driving the displacement of massive populations.
            </p>
          </Section>
          <Section header="Rising Tensions">
            <p>
              Reactionary backlash and regulatory capture prevent nations from addressing the situation. The global precariat is the largest
              demographic and a fertile ground for new countercultures. Mass protest is a daily fact and civil wars loom in the future.
            </p>
          </Section>
        </Section>

        <Section header="...and are Beginning to Sense a World Within..." isInset>
          <Section header="Hidden Space, Hidden Body">
            <p>
              Between every point of the space you're familiar with, exists a second hidden space. It is normally undetectable, but your senses are
              beginning to find a connection to it that is mediated through a second intangible body hidden in this space.
            </p>
          </Section>
          <Section header="Dissociative Experiences">
            <p>
              The mind requires contact with the hidden body. When this connection is stressed, loss of awareness and memory result for most people,
              but for those with stronger ties, psychedelic dissociative experiences hint at the true nature of the connection.
            </p>
          </Section>
          <Section header="Hints of New Abilities">
            <p>
              With awareness of the hidden body, one can harness the resources it provides and use them in physical space to accomplish more in less
              time. When truly synchronized with the hidden body, one can transcend the limits of the body and its surroundings.
            </p>
          </Section>
        </Section>

        <Section header="... and the GM is Sending Them into a World of Secrets" isClassified>
          <Section header="Secret Organizations">
            <p>
              Many nations have secret intelligence agencies, but orchestrating them all is the Schedule and its auditors. Meanwhile, groups with
              goals ranging from revealing secrets to accelerating societal collapse, recruit and manipulate behind the scenes.
            </p>
          </Section>
          <Section header="Mysterious Phenomena">
            <p>
              The list of strange happenings is growing. Locations that induce compulsions. Self-assembling structures. Phantom lights and images
              follow people. Apparent hauntings. Devices of unknown origin. People appear from nowhere. A 1:1 simulation of Earth.
            </p>
          </Section>
          <Section header="Inhuman Entities">
            <p>
              Hidden space is full of semi-aware beings. By manifesting forces, assembling bodies, or possessing humans, they sometimes find ways to
              become less incorporeal. Meanwhile, other beings that definitely aren't from around here lurk in dark places.
            </p>
          </Section>
        </Section>
      </Section>

      <Section header="Basic Gameplay">
        <p>
          Gameplay consists of the GM and players collaborating on a story. The GM presents a situation, and the players say what their characters are
          doing in the situation. Most of the time, anything a player describes their character doing just happens. However, if the action described
          is challenging to the character in some way, the GM will assign it a <Crosslink target={topics.DIFFICULTY}>Difficulty</Crosslink> number.
        </p>
        <p>
          To determine if you succeed, and at what cost, you must use your character's <Crosslink target={topics.METABOLISM}>Metabolism</Crosslink>
          scores to attempt to beat the <Crosslink target={topics.DIFFICULTY}>Difficulty</Crosslink> number. For every
          <Crosslink target={topics.CHALLENGE}>Challenge</Crosslink>, choose a pairing of one
          <Crosslink target={topics.PHYS_METAB}>Physical Metabolism</Crosslink> and one
          <Crosslink target={topics.HIDDEN_METAB}>Hidden Metabolism</Crosslink> that you will use to attempt to overcome the
          <Crosslink target={topics.DIFFICULTY}>Difficulty</Crosslink>.
        </p>
        <Section header="Comparing Difficulty">
          <p>
            Often it is very simple to determine if you succeed. Just compare the <Crosslink target={topics.DIFFICULTY}>Difficulty</Crosslink> number
            to the sum of the current values of your chosen Metabolism pairing. If it meets or exceeds the difficulty then you complete the Challenge
            successfully.
          </p>
        </Section>
        <Section header="Spending Metabolisms">
          <p>
            Most <Crosslink target={topics.CHALLENGE}>Challenge</Crosslink> require some physical or mental effort, and therefore require you to spend
            1 point from either <Crosslink target={topics.METABOLISM}>Metabolism</Crosslink> in your chosen pair after counting your sum of your
            pairing to determine success. Spent <Crosslink target={topics.METABOLISM}>Metabolism</Crosslink> points deduct from your current value and
            cannot be used until you regain them.
          </p>
        </Section>
        <Section header="Complications">
          <p>
            The circumstances of the <Crosslink target={topics.CHALLENGE}>Challenge</Crosslink> can cause it to come with
            <Crosslink target={topics.COMPLICATION}>Complications</Crosslink> attached to it.
            <Crosslink target={topics.COMPLICATION}>Complications</Crosslink> may make the
            <Crosslink target={topics.CHALLENGE}>Challenge</Crosslink> easier, harder, more expensive, or cheaper.
          </p>
          <p>
            The most common Complications, especially in combat, are <Crosslink target={topics.STRENUOUS}>Strenuous</Crosslink>, which requires you to
            spend more Metabolism points, and <Crosslink>Risky</Crosslink>, which requires you to roll dice.
          </p>
        </Section>
        <Section header="Rolling Dice">
          <p>
            Dice are only needed if a <Crosslink target={topics.CHALLENGE}>Challenge</Crosslink> is <Crosslink target={topics.RISKY}>Risky</Crosslink>
            . This happens when a possiblity of failure exists due to things outside of your character's control. Roll a number of 6 sided dice equal
            to the amount of Metabolism points you applied to the action.
          </p>
          <p>
            When you roll them, each die landing on 4 or greater adds a point of <Crosslink target={topics.PROGRESS}>Progress</Crosslink> to the
            results. Any die that comes up 6 gets rerolled, potentially adding more <Crosslink target={topics.PROGRESS}>Progress</Crosslink>, or even
            coming up as 6 to reroll again. Sum up the total amount of <Crosslink target={topics.PROGRESS}>Progress</Crosslink> and if it meets or
            exceeds the
            <Crosslink target={topics.DIFFICULTY}>Difficulty</Crosslink>, then you succeed in the
            <Crosslink target={topics.CHALLENGE}>Challenge</Crosslink>.
          </p>
        </Section>
        <Section header="Pushing Yourself">
          <p>
            You may find yourself in situations where it seems like you don't have enough Metabolism points available to succeed at something. When
            this happens, you can <Crosslink target={topics.PUSH_YRSELF}>Push Yourself</Crosslink> to exert extra effort. This causes all of your
            Metabolisms to refill and lets you immediately spend any refilled points on the same challenge. But be careful, doing this adds negative
            <Crosslink target={topics.COMPLICATION}>Complications</Crosslink> to the <Crosslink target={topics.CHALLENGE}>Challenge</Crosslink>.
          </p>
        </Section>
      </Section>

      <Section header="Getting Started">
        <p>
          As a group, you'll have to decide what point to start your story at. This choice determines how powerful your starting characters are and
          how much they know about the secret parts of the world. The recommended starting methods are The Origin Story, The Heroic Story, or The
          Short Story.
        </p>
        <Section header="The Origin Story">
          <p>This approach is recommended for groups where most of the players have never played Cascade Effect before.</p>
          <p>
            Characters start as ordinary people. Follow the standard character creation steps detailed in the next chapter. Players should avoid
            reading about the secret parts of the setting so that they can learn about the world as the
            <Crosslink target={topics.GAMEMASTER}>GM</Crosslink>
            reveals it.
          </p>
        </Section>
        <Section header="The Heroic Story">
          <p>This approach is recommended if everyone has played Cascade Effect before.</p>
          <p>
            Characters are already slightly superhuman at the start. The Inciting Incident event has already occured. Follow the standard character
            creation steps detailed in the next chapter. Afterwards, each character gets 3 experience points to spend (or a different amount
            determined by the <Crosslink target={topics.GAMEMASTER}>GM</Crosslink>). Players are free to read any secret parts of the setting.
          </p>
        </Section>
        <Section header="The Short Story">
          <p>Recommended for one shots, play testing, and short term games.</p>
          <p>
            Skip standard character creation. Instead, characters have 12 points to split between
            <Crosslink target={topics.PHYS_METAB}>Physical Metabolisms</Crosslink>, with no metabolism ending up below 3 or above 6. Then choose any 9
            <Crosslink target={topics.TRAITS}>Traits</Crosslink> for the character. The <Crosslink target={topics.GAMEMASTER}>GM</Crosslink> may also
            set an amount of experience points to spend as well.
          </p>
        </Section>
      </Section>

      <Break page />
    </Section>
  );
}

export default Chapter1;
