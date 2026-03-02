// import { useContext } from "react";
// import { RulebookContext } from "../context/rulebookContext";
import Break from "../components/break/break";
import ChapterIntroSpread from "../components/chapter-intro-spread/chapter-intro-spread";
import Section from "../components/section/section";
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
                they will grow quickly as you learn to more deeply connect your physical and hidden bodies.{" "}
              </p>
              <p>
                These improvements come from the Experience you earn during your adventures. Experience points you earn
                are used to buy ranks in the Styles and Specializations of the nine Entanglements.{" "}
              </p>
              <p>
                Entanglements represent a permanent connection between your physical and hidden bodies that you have
                learned to sustain naturally. Controlling these connections allows you to utilize preternatural
                abilities beyond the normal range of the human body. This can increase your Metabolism scores and grant
                access to Specializations that further customize and improve the abilities related to each Entanglement.
              </p>
            </>
          }
          rightPageContent={
            <>
              <h2>Cascade Events</h2>
              <p>
                A cascade event is a temporary, often overtly supernatural, effect you can learn to induce through your
                experience. By transferring information from the hidden body into the thermodynamically separate
                physical space, entropy is locally reversed and free energy is created. By controlling this process, one
                can evoke influence inside or outside the body and create action at a distance.{" "}
              </p>
              <p>
                There is a single cascade event associated with each Entanglement. Each Entanglement contains
                Specializations that improve the potency of its signature cascade event.
              </p>
              <p>
                Inducing a cascade event is an exhale action that involves a specific Challenge. Each has a specific set
                of Goals that allows you to customize their effects based on how you spend and apply metabolism points.
              </p>
            </>
          }
        ></ChapterIntroSpread>
      }
    >
      <Section header="Using Entanglements">
        <p>
          There are 9 Entanglements, one for each possible Metabolism pairing. Each Entanglement is composed of two
          Styles, one is intuitive and improves the method of problem solving that comes naturally to this metabolism
          pairing, the other is esoteric and allows you to develop the supernatural cascade event that this pairing
          makes possible. Each Style contains within it several Specializations that allow you to further refine its
          capabilities.
        </p>
        <p>
          Each Entanglement is also associated with a specific inhale action, a specific exhale action or reaction, and
          a specific cascade event. The Styles and Specializations within each Entanglement are focused on improving
          these signature actions.
        </p>
        <Section header="Styles">
          <p>
            Each Style is composed of three ranks that improve your Metabolisms and grant you access to your choice of
            several Specializations. The intuitive Style contains several Specializations that focus on boosting your
            natural abilities beyond human limits, often improving the effectiveness of the specific exhale action or
            reaction associated with its Entanglement. The Esoteric Style grants overtly supernatural capabilities and
            ways to improve and customize cascade events.
          </p>
          <p>
            The rank of each Style itself is also added as an allocation bonus to every Challenge related to its
            associated action.
          </p>
          <p>
            For example, the Entanglement of Flight + Self contains the intuitive style Tough which has Specializations
            that improve your physical durability. Your rank in Tough is applied as an allocation bonus when using the
            Unarmed Defense reaction. This Entanglement also contains the esoteric style Abjuration which has
            Specializations that let you make defensive shields using the Ward cascade event, the rank in this style is
            added as an allocation bonus when inducing this event. These two styles have a similar goal, defense, but
            differ in how to approach this goal.
          </p>
        </Section>
        <Section header="Specializations">
          <p>
            Each Specialization is composed of three ranks. Each one has unique permanent benefits related to the core
            theme of its parent Style. The number of Specializations you can have ranks in is limited by your rank in
            its parent style. You can have 1 Specialization at rank 1, up to 2 more at rank 2, and up to 3 more at rank
            3, resulting in a total of 6 Specializations available at rank 3 in a Style.{" "}
          </p>
        </Section>
        <Section header="Buying Entanglements">
          <p>
            After each session, the GM will give each player at least 1 experience point, or more if you accomplish
            important goals or have a particularly dramatic and entertaining session. Experience points are spent to buy
            ranks in Styles and Specializations. Each rank costs its rank in points, so rank 1 costs 1 point, rank 2
            costs 2 points, and so on. You can buy ranks in any combination of Styles you wish, but Specializations only
            become available after you buy ranks their parent Style.
          </p>
        </Section>

        <Section header="Metabolism Growth">
          <p>As you spend experience, your Metabolism scores will also permanently increase.</p>
          <p>
            The first rank of each Style and the final rank of every Specialization increase the Hidden Metabolism score
            associated with their parent Entanglement. The associated Physical Metabolism score will only be increased
            by acquiring the final rank of a Style.
          </p>
        </Section>
      </Section>

      <Break />

      <Section header="Using Cascade Events">
        <p>
          The first rank you acquire in any esoteric Style allows you to induce the cascade event associated with it.
        </p>
        <p>
          Cascade events are a special class of action typically used to do something overtly supernatural. They are
          typically done as exhale actions and the description of each event indicates the parameters of the Challenge
          required to induce it and the Goals any Progress can be applied to. When induced, an event typically creates
          some small effect even if no Progress is invested in it.
        </p>
        <p>
          The physical appearance of inducing a cascade event is up to you, however unless the event specifies
          otherwise, it is not subtle. Someone witnessing you induce the event can see that the event occurred and that
          it was caused by you.
        </p>
        <Section header="Event Goals">
          <p>
            The amount of Progress needed to induce an event, and the strength of the event, are described its Goals.
            Unlike standard Challenges, the Goals of cascade events are limited by your ability. You cannot spend more
            Progress on any Goal than your rank in the Style, or double this rank if you used the Prime action to
            Prepare it.
          </p>
          <p>
            The description of each event explains what effects each Goal will have per point of Progress you apply to
            it.
          </p>
        </Section>
        <Section header="Improving Events">
          <p>
            There is one event for each Entanglement, but the description there is the most basic and crude version of
            the event. Each Entanglement will also have an esoteric Style that is full of specializations that allow you
            to improve or customize the event. They can add new Goals, improve existing ones, or add new capabilities
            entirely.
          </p>
        </Section>
      </Section>
    </Section>
  );
}

export default ChapterExperience;
