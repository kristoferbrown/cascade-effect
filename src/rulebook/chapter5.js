import Break from "../components/break/break";
import ChapterIntro from "../components/chapter-intro/chapter-intro";
import Section from "../components/section/section";
import Logomark from "../svgs/logomark";
import Crosslink from "../components/crosslink/crosslink";
import { topics } from "../context/rulebookContext";
import Pair from "../components/metabolism/pair";
import Metabolism from "../components/metabolism/metabolism";

function Chapter5() {
  return (
    <Section coordinates={"5"} header="Experience">
      <ChapterIntro>
        <p>
          The <Crosslink target={topics.PHYS_METAB}>Physical Metabolisms</Crosslink> you start the game with only
          improve slowly with great effort. They're unlikely to see more than minor growth over the long term.
        </p>
        <p>
          Conversely, your <Crosslink target={topics.HIDDEN_METAB}>Hidden Metabolisms</Crosslink> may all start at 1 but
          they will grow quickly as you learn to more deeply connect the physical and hidden bodies.
        </p>
        <p>
          The experience you gain from adventuring is used to buy Entanglements that improve your abilities.
          Entanglements are clustered into groups called Styles. There is an Intuitive Style and an Esoteric Style for
          each Metabolism pairing.
        </p>
        <Logomark />
      </ChapterIntro>

      <Section header="Intuitive Styles" isChapterIntroColumn>
        <p>
          Intuitive Styles represent archetypal approaches to problem solving and are named with adjectives that
          describe these approaches. They improve the existing capabilities of the body and mind.
        </p>
        <Section header="The 9 Intuitive Styles">
          <h4>Strong</h4>
          <p>
            The intuitive pairing of <Pair fight self />.
          </p>
          <p>Unarmed attacks, grappling, intimidation, and brute force.</p>
          <h4>Smooth</h4>
          <p>
            The intuitive pairing of <Pair fight near />.
          </p>
          <p>Melee attacks, stealth, charm, finesse, and manual dexterity</p>
          <h4>Sharp</h4>
          <p>
            The intuitive pairing of <Pair fight far />.
          </p>
          <p>Ranged attacks, precision, critical hits, and deception.</p>
          <h4>Tough</h4>
          <p>
            The intuitive pairing of <Pair flight self />.
          </p>
          <p> Unarmed defense, health, stamina, and regeneration.</p>
          <h4>Mobile</h4>
          <p>
            The intuitive pairing of <Pair flight near />.
          </p>
          <p>Melee defense, agility, traversal, and movement speed.</p>
          <h4>Quick</h4>
          <p>
            The intuitive pairing of <Pair flight far />.
          </p>
          <p>Ranged defense, wits, multitasking, tactics, and precognition.</p>
          <h4>Confident</h4>
          <p>
            The intuitive pairing of <Pair focus self />.
          </p>
          <p>Will, courage, and executive function.</p>
          <h4>Bright</h4>
          <p>
            The intuitive pairing of <Pair focus near />.
          </p>
          <p>Intelligence, learning, and creativity.</p>
          <h4>Alert</h4>
          <p>
            The intuitive pairing of <Pair focus far />.
          </p>
          <p>Awareness, empathy, and social predictions.</p>
        </Section>
      </Section>

      <Section header="Esoteric Styles" isChapterIntroColumn isClassified>
        <p>
          Esoteric Styles represent more unusual approaches to solving the same problems. They provide new abilities the
          body is normally incapable of. They often appear overtly supernatural when used.
        </p>
        <Section header="The 9 Esoteric Styles">
          <h4>Schizosomata</h4>
          <p>
            The esoteric pairing of <Pair fight self />.
          </p>
          <p>Radically transform one’s body or the way it is perceived.</p>

          <h4>Sublimation</h4>
          <p>
            The esoteric pairing of <Pair flight self />.
          </p>
          <p>Sublimation Traverse hidden space intangibly and invisibly</p>

          <h4>Abjuration</h4>
          <p>
            The esoteric pairing of <Pair focus self />.
          </p>
          <p>Abjuration Create durable barriers, wards, and filters, and alarms.</p>

          <h4>Electromagnetism</h4>
          <p>
            The esoteric pairing of <Pair fight near />.
          </p>
          <p>Control over the fundamental force of light or electricity.</p>

          <h4>Gravitonertia</h4>
          <p>
            The esoteric pairing of <Pair flight near />.
          </p>
          <p>Control over the fundamental force of mass and motion.</p>

          <h4>Chromodynamism</h4>
          <p>
            The esoteric pairing of <Pair focus near />.
          </p>
          <p>Control over the fundamental force that binds atoms.</p>

          <h4>Evocation</h4>
          <p>
            The esoteric pairing of <Pair fight far />.
          </p>
          <p>Evocation Create overtly explosive and destructive blasts.</p>
          <h4>Pneumaplegia</h4>
          <p>
            The esoteric pairing of <Pair flight far />.
          </p>
          <p>Make fields that manipulate motion and metabolisms.</p>
          <h4>Telethesia</h4>
          <p>
            The esoteric pairing of <Pair focus far />.
          </p>
          <p> Sense, communicate with, and manipulate other minds.</p>
        </Section>
      </Section>

      <Section header="Entanglements">
        <p>
          Entanglements represent a permanent connection between your physical and hidden bodies that you have learned
          to intuitively create. Controlling these connections allows you to utilize preternatural abilities beyond the
          normal range of the human body.
        </p>
        <p>
          Entanglements can grant you increased <Crosslink target={topics.METABOLISM}>Metabolisms</Crosslink>, new
          skills, special abilities, and ways to manipulate the action economy. They can also allow you to utilize
          temporary, overtly supernatural powers called
          <Crosslink target={topics.CASCADE_EVENT}>Cascade Events</Crosslink> that directly channel the Cascade Effect
          into forces outside of the body.
        </p>
        <Section header="Buying Entanglements">
          <p>
            Each session, you will earn 1-3 experience points, or more if you accomplish goals or have a particularly
            dramatic session. All Entanglements have 3 ranks. Each rank costs 1 experience to acquire.
          </p>
        </Section>
        <Section header="Core Entanglements">
          <p>
            At the start, you only have access to the 3 core Entanglements, one for each
            <Crosslink target={topics.HIDDEN_METAB}>Hidden Metabolism</Crosslink>. Each rank of these increases the
            related Metabolism by 1 and unlocks access to several related Styles. Once unlocked, you can use experience
            to buy Entanglements within that Style.
          </p>
          <p>
            These Entanglements grant fundamental abilities that enable adventuring. For example, Empower removes the
            long term consequences of
            <Crosslink target={topics.INJURY}>injury</Crosslink>, Momentum lets you practically guarantee success in
            critical moments, and Danger Sense reduces the threat posed by firearms.
          </p>
        </Section>
        <Section header="Styles">
          <p>
            All of the many Entanglements are divided into Styles. Think of each Style as a class or a cluster of
            related Entanglements. There is an Intuitive Style and an Esoteric Style for each Metabolism pairing. Each
            Intuitive Style represents an archetypal approach to problem solving, and each Esoteric Style represents an
            overtly supernatural power.
          </p>
        </Section>
      </Section>
      <Section header="Metabolism Growth">
        <p>
          As you spend experience and buy Entanglements, your Metabolism scores will also permanently increase in two
          ways.
        </p>
        <ol>
          <li>
            Each rank of the three core Entanglements includes a 1 point increase to its related Metabolism. This allows
            you to get a few points in each Hidden Metabolism with a minimal experience investment.
          </li>
          <li>
            Each time the total number of ranks you have within Styles related to the same Hidden Metabolism is a
            multiple of 6, increase that Metabolism score by 1 point. For example, Strong, Tough, and Abjuration are all
            Self styles. If you have 3 points within Strong and 3 points within Tough, this is a total of 6 ranks and
            will cause your Self score to increase by 1. If later you also get 6 ranks in Abjuration, you now have 12
            total ranks within Self styles and your Self score will increase by 1 again.
          </li>
        </ol>
        <p>
          All Metabolism scores have a maximum of 9. Any time your ranks would increase a Hidden Metabolism above 9,
          instead increase a Physical Metabolism of your choice.
        </p>
      </Section>
      <Section header="Cascade Events">
        <p>
          Some entanglements, particularly those in esoteric styles, grant you the ability to induce cascade events.
          These events create temporary supernatural effects that are either instantaneous or last for a specified
          duration.
        </p>
        <p>
          Unless otherwise specified by the entanglement, inducing a cascade event is a{" "}
          <Crosslink target={topics.STRENUOUS}>Strenuous</Crosslink>{" "}
          <Crosslink target={topics.CHALLENGE}>challenge</Crosslink> that takes a full action that requires{" "}
          <Metabolism focus />. If it targets you, it also requires <Metabolism self />. If it targets someone you
          touch, it requires <Metabolism near />. If it targets anything else, it requires <Metabolism far />.
        </p>
        <p>
          Some events only require a single point of <Crosslink target={topics.PROGRESS}>Progress</Crosslink> to take
          full effect and for others the amount of Progress created increases the strength of the event. If the event
          description states that the target can use a<Crosslink target={topics.REACTION}>Reaction</Crosslink> against
          it, the reaction uses the same metabolisms that were used to induce it. The difference between the amounts of
          Progress created by the event and the reaction determine how effective the event is.
        </p>
        <p>
          Some events may specify that they require other metabolisms, other{" "}
          <Crosslink target={topics.ACTION}>action</Crosslink> types, other
          <Crosslink target={topics.COMPLICATION}>complications</Crosslink>, or that they can only be used outside of
          combat.
        </p>
      </Section>
      <Break page />
    </Section>
  );
}

export default Chapter5;
