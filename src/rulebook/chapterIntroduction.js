import { useContext } from "react";
import { RulebookContext } from "../context/rulebookContext";
import Metabolism from "../components/metabolism/metabolism";
// import Break from "../components/break/break";
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
                natural disasters, destructive storms, unprecedented floods, widespread crop failures, long term
                droughts, and lethal heat waves are daily news stories. The ensuing societal effects are just as
                dramatic. Failing economies, looming wars, global refugee crises, abandoned cities, and reactionary
                backlashes are rippling across the globe in chain reactions. Fueled by these tensions new counter
                cultures, rebellions, and social movements are growing explosively and creating new communities outside
                of the status quo. Amidst the growing chaos, almost everyone has heard rumors or seen blurry videos of
                something they can't explain.
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
                exists parallel to the one we know, and in it resides your subtle body, mirroring your physical form.
                You can feel it. You can reach out and feel the subtle bodies of others. Yet no one else seems to
                realize it's there. It was always there, always a necessary part of you. But now that you're beginning
                to interact with it, you're discovering that it can help you do things you never thought possible.
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
          Cascade Effect, unraveling its mysteries, and surviving its dangers.
        </p>
        <Section header="Player Characters">
          <p>
            The players role play characters that are about to embark on an adventure revealing a world much more
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
              fact and civil wars loom on the horizon in many countries.
            </p>
          </Section>
        </Section>

        <Section header="A World Within" isInset>
          <Section header="The Subtle Body">
            <p>
              Between every point of the space you're familiar with, exists a second hidden space. This parallel realm,
              called Infraspace, is invisible to most. But you've sense an intangible mirror of your physical form
              embedded in this space, your Subtle Body.
            </p>
          </Section>
          <Section header="Dissociative Experiences">
            <p>
              The mind requires contact with the Subtle Body. When this connection is stressed, loss of awareness and
              memory result for most people, but for those with stronger links, psychedelic dissociative experiences
              hint at the true nature of consciousness and the world.
            </p>
          </Section>
          <Section header="Hints of New Abilities">
            <p>
              With awareness of the Subtle Body, one can harness the resources it provides and use them in physical
              space to accomplish more in less time. When truly synchronized with the Subtle Body, one can transcend the
              limits of the physical body and its surroundings.
            </p>
          </Section>
        </Section>

        <Section header="A World of Secrets" isClassified>
          <Section header="Secret Organizations">
            <p>
              Many nations have secret intelligence agencies, but orchestrating them all is the Schedule and its
              auditors. Meanwhile, other groups with goals ranging from revealing these secrets to accelerating societal
              collapse, recruit and manipulate behind the scenes.
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
              Infraspace is full of semi-aware beings. By manifesting physical forces, assembling bodies, or possessing
              humans, they sometimes find ways to become less incorporeal. Meanwhile, other beings that definitely
              aren't from around here lurk in dark places.
            </p>
          </Section>
        </Section>
      </Section>

      <Section header="What is the Cascade Effect?">
        <p>The world and the people within it have a dual nature, split between physical and incorporeal halves.</p>
        <Section header="Duality of Space" isInset>
          <ul>
            <li>
              <strong>Ultraspace</strong> is the physical world and its laws as we normally experience and understand
              it. It is often just referred to as physical space.
            </li>
            <li>
              <strong>Infraspace</strong> is hidden realm running parallel to the physical. It's almost undetectable,
              but those that have suspected its presence have called it many names depending on their world view, the
              spirit world, the astral plane, hidden space, Calabi-Yau space, and many others.
            </li>
          </ul>
          <p>
            "Think of Ultraspace as the surface world and Infraspace as the underside, like two sides of a coin, one
            tangible, the other invisible but both equally real."
          </p>
        </Section>
        <Section header="Duality of Body" isInset>
          <p>The characters themselves also have a split nature.</p>
          <ul>
            <li>
              <strong>The Physical Body</strong> is how we normally navigate the world. It is the mind and the flesh,
              made of muscle, bone, organs, neurons, chemicals, and electric signals. In the game it is represented by
              the
              <Crosslink target={linkMap.PhysicalMetabolisms}>Physical Metabolisms</Crosslink> of <Metabolism fight />,{" "}
              <Metabolism flight />, and <Metabolism focus />
            </li>
            <li>
              <strong>The Subtle Body</strong> is an intangible part of every human and most animals. It is not your
              mind or personality, and it is useless without its physical analog, but is a necessary part of maintaining
              consciousness. In the game it is represented by the
              <Crosslink target={linkMap.SubtleMetabolisms}>Subtle Metabolisms</Crosslink> of <Metabolism self />,{" "}
              <Metabolism near />, and <Metabolism far />.
            </li>
          </ul>
        </Section>
        <Section header="Crossing Over">
          <p>
            Normally, each half is causally and thermodynamically separate from the other side, and unable to interact.
            However the laws of physics permit a few exotic processes to transfer particles from one side to the other.
            When this occurs, information is effectively created from nothing, therefore reversing entropy and releasing
            free energy.
          </p>
          <p>
            Normally the energy released is so small that it's practically unmeasurable. However, when a sufficiently
            large transfer of information occurs, the process collapses in on itself and becomes self reinforcing,
            pulling in more and more information and creating more and more energy.
          </p>
          <p>
            Information transfer that is sufficiently self-reinforcing to unleash measurable amounts of free energy is
            known as the <em>Cascade Effect</em>.
          </p>
        </Section>
        <Section header="Harnessing the Cascade Effect">
          <p>
            Trans-spatial information transfer is typically an uncommon process in nature. However, evolution has found
            ways to harness it by creating the Subtle Body, an intangible information processing organ that supplements
            the physical brain. In humans, this process is an important part of consciousness and other mental
            faculties.
          </p>
          <p>
            In extremely rare cases, humans can learn to sense and control their Subtle Body and the connection to it,
            allowing them to intentionally induce and harness the Cascade Effect. These humans are referred to as
            <em>entangled</em>.
          </p>
        </Section>
      </Section>

      <Section header="Entangled Characters">
        <p>
          Player characters are formerly ordinary humans who have become <em>entangled</em>. They have developed
          conscious awareness of their Subtle Body and and are beginning to harness energy created by the Cascade
          Effect. This grants them the following capabilities beyond those provided by the Physical Body alone.
        </p>
        <ul>
          <li>
            <Crosslink target={linkMap.SubtleMetabolisms}>Subtle Metabolisms</Crosslink> scores. Normal humans have
            these metabolisms only at unmeasurable levels. However, entangled characters can use these metabolisms as a
            second set of resources, supplementing the physical mind and body to allow increased levels of competence
            and exertion.
          </li>
          <li>
            An <Crosslink target={linkMap.InhaleAction}>inhale action</Crosslink> and an
            <Crosslink target={linkMap.ExhaleAction}>exhale action</Crosslink> in combat. In dangerous situations, the
            parallelized mind of an entangled character can do things in the same time a normal human can do one thing.
          </li>
          <li>
            <Crosslink target={linkMap.Entanglements}>Entanglements</Crosslink>. The Subtle Body is more mutable than
            the Physical Body, and over time can be modified and improved to increase a character's capabilities. This
            process is measured in <Crosslink target={linkMap.Entanglements}>Entanglements</Crosslink>, pairings of one
            Physical and one Subtle Metabolism that when developed will rapidly increase the
            <Crosslink target={linkMap.SubtleMetabolisms}>Subtle Metabolisms</Crosslink> and allow for subtle superhuman
            abilities.
          </li>
          <li>
            <Crosslink target={linkMap.CascadeEvents}>Cascade Events</Crosslink>. True mastery over the Cascade Effect
            allows one to manifest energy outside of the Physical Body, allowing one to create temporary effects that
            circumvent the perceived laws of physical reality. Cascade Events can manipulate the fundamental forces of
            physics, transform the body, communicate telepathically, or allow one to traverse Infraspace.
          </li>
        </ul>
      </Section>
      <Section header="Basic Gameplay">
        <p>
          Gameplay consists of the GM and players collaborating on a story. The GM presents a situation, and the players
          say what their characters are doing. Most of the time, anything a player describes their character doing just
          happens. However, if the action described becomes contested or difficult for a character in some way, there
          are specific ways to resolve it.
        </p>
        <ul>
          <li>
            <Crosslink target={linkMap.Challenges}>Challenges</Crosslink>. Any action your character takes that has a
            risk of failure or requires extra effort is resolved as a Challenge in order to determine if you succeed and
            at what cost. Challenges have a<Crosslink target={linkMap.DifficultyAndContext}>Difficulty</Crosslink>{" "}
            number set by the GM. You must choose a pairing of one{" "}
            <Crosslink target={linkMap.PhysicalMetabolisms}>Physical Metabolism</Crosslink> and one
            <Crosslink target={linkMap.SubtleMetabolisms}>Subtle Metabolism</Crosslink> that you will use to attempt to
            meet the Difficulty. Challenges are fully described in Chapter 3.
          </li>
          <li>
            <Crosslink target={linkMap.Effort}>Effort</Crosslink> and <Crosslink target={linkMap.Risk}>Risk</Crosslink>.
            Challenges may have an Effort level that determines how you apply your Metabolism points to it and a Risk
            level that determines if you need to roll dice. These values may be low, normal, or high, but normal is used
            unless specified otherwise. Risk and Effort are fully described in Chapter 3.
          </li>
          <li>
            <Crosslink target={linkMap.AdvantageAndDisadvantage}>Advantage and Disadvantage</Crosslink>. If you can find
            a way to change the odds of success, you may get Advantage or Disadvantage. When this happens, you can
            change the Risk or Effort values in a helpful way. This is most often done by using any
            <Crosslink target={linkMap.Traits}>Traits</Crosslink> that your character might have. This is fully
            described in Chapter 3.
          </li>
          <li>
            <Crosslink target={linkMap.CascadeEvents}>Cascade Events</Crosslink>. You character may learn to induce a
            few Cascade Events. These events are treated special Challenges that have{" "}
            <Crosslink target={linkMap.CascadeEvents}>Metrics</Crosslink> applied to them measuring any supernatural
            effects they may have. Cascade Events and Metrics are fully described in Chapter 6.
          </li>
          <li>
            <Crosslink target={linkMap.Combat}>Combat</Crosslink>. In the dangerous world Cascade Effect characters are
            entering into, life or death conflict is inevitable. When combat occurs, gameplay breaks into turns and the
            actions you can take become more rigidly defined. You can take one inhale action and one exhale action each
            turn. Combat is fully described in Chapter 4, and the combat actions you can take are listed in Chapter 5.
          </li>
        </ul>

        <Section header="Rolling Dice">
          <p>
            When a Challenge has a normal or higher Risk level, dice are required. The number of dice you roll is
            determined by the specifics of the Effort level and your Metabolism Pairing. Each die you roll is a 6 sided
            die, a d6.
          </p>
          <p>
            After rolling, ignore any dice that landed on 3 or lower and count the number of dice that landed on 4 or
            above. Any die that lands on 6 "explodes" and gets rerolled, and gets counted again if it lands on 4 or
            above, and even gets rerolled again if it comes up 6 again. After any rerolls are complete, final count
            total of dice that were 4 or above is the result of the roll.
          </p>
        </Section>
      </Section>
      <Section header="Getting Started">
        <p>
          The next chapter has step by step instructions for building a Cascade Effect character. Your character should
          have some reason why they are choosing a life of adventure and danger over returning to normal life. The group
          of characters as a whole should also have a reason to exist and stick together.
        </p>
        <p>
          As a group, you'll also have to decide with the GM what point to start your story at. This choice determines
          how powerful your starting characters are and how much they know about the secret parts of the world. The
          recommended starting methods are The Origin Story, The Heroic Story, or The Short Story.
        </p>
        <Section header="Getting the Group Together">
          <p>
            Why is your group of player characters working together? What is their goal? There are many answers to this
            question, such as one of the following options, but do not feel limited by this list.
          </p>
          <ul>
            <li>
              Perhaps your group was brought together by some danger besieging them that they cannot easily escape from
              and are simply trying to survive.
            </li>
            <li>
              Perhaps they are part of a counterculture movement attempting to build or defend a new way of living on
              the frontier of society.
            </li>
            <li>
              Perhaps they are trying to rebuild community in one of the many regions that has been struck by disaster,
              abandoned by their parent states, and left to martial law.
            </li>
            <li>
              Perhaps they are Auditors working for The Schedule, a mysterious organization containing and covering up
              supernatural phenomena.
            </li>
            <li>
              Perhaps they're on the run from the Schedule or fighting against its abuses of power after their
              supernatural nature has become flagged as something that must be contained.
            </li>
            <li>
              Perhaps they are on a specific crusade against righting a specific form of injustice manifesting in the
              world.
            </li>
          </ul>
        </Section>
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
            Characters are already slightly superhuman at the start. Characters are already slightly superhuman at the
            start. Follow the standard character creation steps detailed in the next chapter, but their Inciting
            Incident and the Metabolism increases it grants have already occurred. Afterwards, each character gets 3
            experience points to spend (or a different amount determined by the
            <Crosslink target={linkMap.TheGameMaster}>GM</Crosslink>).
          </p>
        </Section>
        <Section header="The Short Story">
          <p>Recommended for one shots and short term games.</p>
          <p>
            Skip standard character creation. Instead, characters have 12 points to split between
            <Crosslink target={linkMap.PhysicalMetabolisms}>Physical Metabolisms</Crosslink> scores, with no metabolism
            ending up below 3 or above 6. Choose one Subtle Metabolism that starts with a score of 2 and the rest start
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
