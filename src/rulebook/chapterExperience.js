// import { useContext } from "react";
// import { RulebookContext } from "../context/rulebookContext";
import Break from "../components/break/break";
import ChapterIntroSpread from "../components/chapter-intro-spread/chapter-intro-spread";
import Section from "../components/section/section";
import Logomark from "../svgs/logomark";
// import Crosslink from "../components/crosslink/crosslink";
// import Pair from "../components/metabolism/pair";
// import Metabolism from "../components/metabolism/metabolism";

function ChapterExperience() {
  // const { topicMap } = useContext(RulebookContext);
  // const linkMap = topicMap.current;

  return (
    <Section
      coordinates={"6"}
      header="Experience"
      introContent={
        <ChapterIntroSpread
          chapterNumber={6}
          title="Experience"
          leftPageContent={
            <>
              <h2>Entanglements</h2>
              <p>
                The Physical Metabolisms you start the game with only improve slowly with great effort. They're likely
                to see only minor growth over the long term. Conversely, your Hidden Metabolisms may all start low but
                they will grow quickly as you learn to more deeply connect your physical and hidden bodies.
              </p>
              <p>
                These improvements come from the Experience you gain during your adventures. Experience points you earn
                are used to buy ranks in the nine Entanglements and ranks in the Specializations within those
                Entanglements.
              </p>
              <p>
                Entanglements represent a permanent connection between your physical and hidden bodies that you have
                learned to intuitively create and sustain. Controlling these connections allows you to utilize
                preternatural abilities beyond the normal range of the human body. Entanglements can increase
                Metabolisms and Action Bonuses and grant access to Specializations that further customize and improve
                your abilities related to the Entanglement.
              </p>
            </>
          }
          rightPageContent={
            <>
              <h2>Cascade Events</h2>
              <p>
                A cascade event is a temporary, often overtly supernatural, effect you can learn to induce by ranks in
                Entanglements with your experience. By transfering information from the hidden body into the
                thermodynamically separate physical space, entropy is locally reversed and free energy is created. By
                controlling this process, one can evoke influence insdide or outside the body and create action at a
                distance.
              </p>
              <p>
                There is a single cascade event associated with each Entanglement. This signature supernatural ability
                has its own action bonus that improves its potency.
              </p>
              <p>
                Inducing a cascade event is a special action that can have customizable effects based on how you spend
                and apply metabolism points. Specializations related to the cascade event will improve its power or give
                you additional customization options each time you use it.
              </p>
            </>
          }
        ></ChapterIntroSpread>
      }
    >
      <Section header="Using Entanglements">
        <p>
          There are 9 Entanglements, one for each possible Metabolism pairing. Each Entanglement is composed of 3 ranks
          you can purchase with experience points, 3 action bonuses that can be increased by these ranks, and several
          Specializations that can be unlocked by these ranks.
        </p>
        <p>
          These Specializations are sorted into two groups called Styles. Each Entanglement has an Intuitive Style
          containing Specializations that boost your natural abilities beyond human limits and an Esoteric Style that
          grants overtly supernatural capabilities.
        </p>
        <Section header="Buying Entanglements">
          <p>
            After each session, the GM will give each player at least 1 experience point, or more if you accomplish
            important goals or have a particularly dramatic and entertaining session. All Entanglements have 3 core
            ranks. Each rank costs 1 experience to acquire.
          </p>
          <p>
            Each rank directly increases your choice of one of the three action bonuses within the Entanglement. When
            chosing an action bonus, you may choose the same bonus multiple times or a mixture. The first and last rank
            also increase a specified Metabolism score. Finally, each rank also unlocks access to your choice of two
            Specializations. The action bonus you chose to increase determines which Style the specializations you can
            unlock must be in.
          </p>
        </Section>
        <Section header="Styles">
          <p>
            Each Entanglement contains within it two Styles, an intuitive Style and an esoteric Style. Each Style is a
            group of Specializations with a common theme.
          </p>
          <p>
            For example, the Entanglement of Flight +Self contains the intuitive Style Tough which has Specializations
            improving your physical durability, and the esoteric Style Abjuration which has Specializations that let you
            make defensive shields using the Ward cascade event.
          </p>
        </Section>
        <Section header="Specializations">
          <p>
            Each Specialization has three ranks. Once you have unlocked a Specialization, you can buy a rank in it by
            spending 1 experience point to permanently gain its benefits.
          </p>
        </Section>
        <Section header="Metabolism Growth">
          <p>As you spend experience within Entanglements your Metabolism scores will also permanently increase.</p>
          <p>
            The first rank of an Entanglement and the final rank of every Specialization within it increase the Hidden
            Metabolism score associated with this Entanglement. The associated Physical Metabolism score will only be
            increased by acquiring the final rank of the Entanglement.
          </p>
        </Section>
      </Section>

      <Section header="Using Cascade Events">
        <p>
          Cascade events are a special class of action typically used to do something overtly supernatural. Unless
          otherwise specified in the event’s description, inducing a cascade event is a full action and a default
          effort, low risk Challenge. Focus plus the Hidden Metabolism associated with the event are required in any
          Challenges.
        </p>
        <p>
          When induced, an event creates some small effect even if no Progress is invested in it. Each event has an
          action bonus, if this bonus is above 1 you can use Progress to increase the effectiveness of the event.
        </p>
        <Section header="Event Metrics">
          <p>
            The amount of Progress needed to induce an event, and the strength of the event, are described by metrics.
            Any Progress created when inducing the event is spent to increase these metrics. Each metric can be
            increased by up to a maximum number of points equal to your Action Bonus for this event. For example, if
            your action bonus for an event is 3 and the event has two different basic metrics, you could increase either
            metric from 0 to 1, 2 or 3 and increasing both to 3 would typically would require 6 Progress to do.
            Conversely, if your action bonus is 0 you cannot increase any metrics and therefore they all remain at their
            minimum value.
          </p>
          <p>
            Most metrics are a basic single unit. This unit indicates both how much the metric increases per point of
            Progress you spend on it and also the minimum that occurs if you spend 0 Progress on it. For example, an
            event with the metric “Duration: 1 minute” starts with a minimum duration of 1 minute when you spend 0
            Progress on it, and increases by 1 minute for each point of Progress spent on it.
          </p>
          <p>
            Some metrics indicate that they cost more than 1 point of Progress to increase them once. For example, the
            metric “Targets: 1 person per 3” indicates that the event targets 1 person and can be increased to 2 people
            by spending 3 Progress or 3 people by spending 6 Progress, and so on.
          </p>
          <p>
            Finally, some metrics specify a minimum value. For example, the metric “Range: 10X, minimum = 1 meter” means
            the range starts 1 meter and is multiplied by 10 per point of Progress. This is often used to set the
            minimum to 0 or to set it to the value of the event's action bonus. For example, “Size: 1 meter, minimum =
            Bonus” means the size starts at a number of meters equal to the event’s Action Bonus and can be increased in
            1 meter increments. If you have a 0 in the bonus that a minumum is set to, the minimum is instead set to 1.
          </p>
          <p>
            The physical appearance of inducing a cascade event is up to you, however unless the event specifies
            otherwise, it is never subtle. Someone witnessing you induce the event can see that the event occured and
            that it was caused by you.
          </p>
        </Section>
        <Section header="Event Limitations">
          <p>
            Inducing an event cannot benefit from the Push or Improvise actions. However, their are specializations in
            the Bright and Confident styles that allow you to break this rule, and also increase the limit on how many
            times you can improve Metrics.
          </p>
        </Section>
        <Section header="Improving Events">
          <p>
            There is one event for each Entanglement, but the description there is the most basic and crude version of
            the event. Each Entanglement will also have an esoteric Style that is full of specializations that allow you
            to improve or customize the event. They can add new metrics, improve existing ones, or add new capabilities
            entirely.
          </p>
        </Section>
      </Section>
    </Section>
  );
}

export default ChapterExperience;
