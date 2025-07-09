// import { useContext } from "react";
// import { RulebookContext } from "../context/rulebookContext";
// import Break from "../components/break/break";
import ChapterIntroSpread from "../components/chapter-intro-spread/chapter-intro-spread";
import Section from "../components/section/section";
// import Crosslink from "../components/crosslink/crosslink";
import Metabolism from "../components/metabolism/metabolism";
import Pair from "../components/metabolism/pair";

function ChapterActions() {
  // const { topicMap } = useContext(RulebookContext);
  // const linkMap = topicMap.current;

  return (
    <Section
      coordinates={"5"}
      header="Actions"
      introContent={
        <ChapterIntroSpread
          chapterNumber={5}
          title="Actions"
          leftPageContent={
            <>
              <h2>Actions out of Combat</h2>
              <p>
                Outside of combat you are free to do anything you describe, and the GM will create Challenges for you as
                you run into them. If the situation allows it, you can also take specific actions from the list in this
                chapter to benefit from their Action Bonuses and any specializations that improve them.
              </p>
            </>
          }
          rightPageContent={
            <>
              <h2>Actions in Combat</h2>
              <p>
                In combat, all actions you take will generally be from the list in this chapter. If you wish to do
                something not directly covered by these actions, the GM will present a Challenge to resolve it. In
                general actions in combat consume a single inhale or exhale action, with the exception of full actions
                that consume both.
              </p>
            </>
          }
        ></ChapterIntroSpread>
      }
    >
      <Section header="Attack Actions">
        <p>
          Attack actions always require a Default Risk and Effort Challenge requiring the action's related metabolisms.
          The appropriate Action Bonus is added to the Progress of this Challenge. If you are using a weapon, you must
          spend a minimum number of Metabolism points equal to the weapon's size in order to attack with this weapon.
          Targets of these attacks can use reactions to reduce the Threat dealt to them and can then move 1 meter for
          free.
        </p>
        <Section header="Melee Attack">
          <p>You take a swing at an adjacent opponent with whatever weapon you have in hand.</p>
          <p>
            Requires <Pair fight near />. The amount of Progress you get, plus the weapon's Size rating, is dealt to the
            target as Threat.
          </p>
          <p>
            Alternatively, if you would deal more Threat than the target's Reaction, you can choose to deal no Threat
            and instead shove the target. Move them directly away from you by 1 + Melee Attack bonus meters.
          </p>
        </Section>
        <Section header="Ranged Attack">
          <p>
            You fire a pistol, throw a stone, shoot an arrow, or unleash a burst automatic gunfire at a distant
            opponent.
          </p>
          <p>
            Requires <Pair fight far />. The amount of Progress you get, plus the weapon's Size rating, is dealt to the
            target as Threat.
          </p>
          <p>
            Alternatively, if you would deal more Threat than the target's Reaction and the target is behind cover, you
            can choose to deal no Threat and instead suppress the target. The target gets the Suppressed state with an
            intensity of 1 + Ranged Attack bonus.
          </p>
        </Section>
        <Section header="Unarmed Attack">
          <p>You lash out at an adjacent opponent with a punch, kick, elbow, grab, shove, or other blow.</p>
          <p>
            Requires <Pair fight self />. The amount of Progress you get is dealt to the target as Threat.
          </p>
          <p>
            Alternatively, if you have a free hand and would deal more Threat than the target's Reaction, you can choose
            to deal no Threat and instead shove or grab the target. If you shove, move them away from you by 1 + Unarmed
            Attack bonus meters. If you grab, you give the target the Grappled state with an intensity of 1 + Unarmed
            Attack bonus.
          </p>
        </Section>
      </Section>

      <Section header="Basic Actions">
        <p>
          Basic actions can be done as either your inhale or exhale action, or over the course of a few seconds out of
          combat. These actions often do not require Challenges, so they can be taken without spending any resources.
          However, some provide ways to use a Challenge to improve their effects. All basic actions are improved by and
          depend on the associated Action Bonus, but can still provide a useful benefit when this bonus is 0. If any
          Challenge is involved, this bonus is added to the Progress.
        </p>
        <Section header="Aim">
          <p>You take a moment to line up an attack.</p>
          <p>
            As an inhale action, choose a target you can see. If your following exhale action includes an attack on this
            target, this attack is made with advantage and your Aim Bonus is added to it.
          </p>
        </Section>
        <Section header="Heal">
          <p>
            You instinctively pull resources stored in your hidden body to roughly seal the wounds of a target's
            physical body just enough to keep it moving.
          </p>
          <p>
            Touch a target to remove one Stress from a Physical Metabolism that currently has a maximum equal to or
            lower than your Heal bonus. If the target was youself, also remove one Stress from another Physical
            Metabolism with any maximum value even if your Heal bonus is 0 or no other Metabolism was healed.
          </p>
        </Section>
        <Section header="Hide">
          <p>You take cover to protect yourself from incoming threats or hide from your enemies.</p>
          <p>
            You can only take this action if you are next to, or use your free movement to get next to, something that
            could plausibly be used as cover. The value of the cover increases by your Hide bonus. Anyone the cover
            protects you from can make a low effort Perception reaction. Anyone with a result lower than the cover's
            increased value (or its original value if your Hide bonus is 0) no longer knows your exact position and
            can't target you directly. These benefits end whenever you move more than a meter from your source of cover.
          </p>
          <p>
            You can also take this action out of combat to act stealthily. When you do so treat it as a Challenge and
            anything with a lower result on a Low Effort Perception Reaction than your Progress is unaware of you.
          </p>
        </Section>
        <Section header="Improvise">
          <p>You prepare for a Challenge, help an ally, or execute a clever plan.</p>
          <p>
            Describe a plan or course of action that could plausibly improve the outcome of a specific action or
            Challenge about to be taken by you or someone else you can see. If the next action taken by the target, is
            the planned action, it gains advantage and has your Improvise bonus added to the Progress.
          </p>
          <p>
            When you do this, the Improvise action takes as much time as the Challenge or action it benefits. For
            example, if the benefit is applied to an action in combat then Improvise also consumes an action, or if it
            is applied to a Challenge involving an hour of work then Improvise also requires an hour. The Improvise
            action must occur before the action that benefits from it, or if the target is another person you are
            helping Improvise may take place simultaneously.
          </p>
        </Section>
        <Section header="Interact">
          <p>You use an object you are carrying or within your reach in the enviroment.</p>
          <p>
            Interacting with something typically requires a free hand. Most object interactions, such as grabbing a
            loose object, flipping a switch, pulling an item from a bag, or unlocking a door with a key have no
            Difficulty and simply occur immediately. This includes any interaction with things you are carrying, such as
            drawing, stowing, or reloading a weapon. If this interaction had no Difficulty, you may also do an
            additional number of interations equal to your Interact action bonus. For example, if you use this
            interaction to stow a weapon and your action bonus is 1 you could then follow up by drawing a different
            weapon in the same action.
          </p>
          <p>
            If this action can't be done easily in a brief moment, for example moving a heavy object, navigating an
            unfamiliar user interface, or picking a simple lock, the GM may assign it a difficulty. Each time you take
            this action, reduce the difficulty of the task by 1 plus your Interact bonus. Once the difficulty reaches 0,
            you've completed the task.
          </p>
        </Section>
        <Section header="Manipulate">
          <p>
            You attempt to influence someone else socially, threatening, taunting, distracting, or de-escalating them.
          </p>
          <p>
            Pick a target who makes a Low Effort Willpower reaction. If the result is lower than your Manipulate bonus,
            they gain a State of your choice between Afraid, Calmed, Enthralled, or Taunted with intensity 1 until
            removed or the start of your next turn.
          </p>
          <p>
            You can also do this as full action if your Manipulate bonus is 0 or you wish to have a greater impact. When
            you do, the target's Willpower Reaction must instead beat the results of a
            <Pair focus far /> Challenge, plus your Manipulate Bonus. If the reaction has a lower result, they gain the
            chosen State with an intensity equal the difference between it and your Challenge.
          </p>
        </Section>
        <Section header="Move">
          <p>You dash from one location to another.</p>
          <p>
            Move a number of meters up to your Move bonus. Don't forget to also move the free meter you get for having
            taken an action.
          </p>
          <p>
            If you wish to move further, you can also make a Low Risk and Default Effort Challenge. However, for this
            Challenge you do not need to choose a Metabolism pairing and may freely spend any combination of points from
            all of your Metabolisms. Each point of Progress lets you move 1 additional meter.
          </p>
          <p>
            Spaces with obstructions may have a Difficulty assigned to them. Instead of using 1 meter of movement to
            enter these spaces you must use a number of meters equal to the Difficulty. For example you may need to
            spend 2 meters of movement to enter spaces that require opening a door, crossing rough terrain, balancing,
            or avoiding an obstacle, and even 3 meters for climb a meter vertically or scramble over a chest high
            boulder. Particularly dangerous terrain may also increase the Risk level, and the GM may even add
            consequences, such as falling, for failing to get enough Progress to enter the dangerous space. Typically,
            you can see these risks before choosing to move into the space.
          </p>
        </Section>
        <Section header="Push">
          <p>With great effort, you push yourself to the limit to avoid failing an important task.</p>
          <p>
            You can only take this action immediately after attempting a different action or Challenge with
            unsatisfactory results and on the same turn as the original action if you are in combat. This extends the
            original attempt, replacing the results. Take any number of points of unavoidable Stress to
            <Metabolism focus />, as long as it is lower than its current maximum and wont cause injury. Add this number
            and your Push bonus to the results of the original action, as if it were done with an Action Bonus increased
            by this amount. Then resolve the original action with these new results.
          </p>
        </Section>
        <Section header="Rest">
          <p>
            You take a moment to reorient and catch your breath. The benefits of this depend on how long you spend doing
            it.
          </p>
          <p>
            As a single basic action in combat, you recover a number of any spent Metabolism points equal to your Rest
            bonus + 1. Alternatively, instead of recovering Metabolisms you can choose reduce the intensity of any state
            by your Rest bonus + 1.
          </p>
          <p>
            Out of combat, if you spend an hour resting, doing little more than treating wounds, relaxing, chatting,
            eating, self care, etc., recover all spent Metabolism points.
          </p>
          <p>
            If you spend several hours resting, including a reasonable amount of sleep, remove all Stress from your
            Hidden Metabolisms and 1 + your Rest Bonus from each Physical Metabolism.
          </p>
        </Section>
      </Section>

      <Section header="Reactions" topicKey="reactionsList">
        <p>
          Reactions happen outside of your turn in response to the actions of others. The only limit to how often you
          can react in or out of combat is how many Metabolism points you are willing to spend. always add the Action
          Bonus you have for each reaction to the Progress you make.
        </p>
        <Section header="Melee Defense" topicKey="meleeDefenseReaction">
          <p>You deflect or dodge a melee weapon attack.</p>
          <p>
            Each point of Progress you get on a Low Risk and Default Effort <Pair flight near /> Challenge, plus your
            Melee Defense bonus and the rating of any armor you happen to be wearing, reduces the Threat dealt by an
            incoming melee attack. You may move 1 meter freely afterwards.
          </p>
        </Section>
        <Section header="Ranged Defense" topicKey="rangedDefenseReaction">
          <p>You attempt to predict your opponent's aim and get out of the path of their projectiles.</p>
          <p>
            Each point Progress you get on a Low Risk and Default Effort <Pair flight far /> Challenge, plus your Ranged
            Defense bonus and the rating of any armor you happen to be wearing, reduces the Threat dealt by an incoming
            ranged attack. You may move 1 meter freely afterwards.
          </p>
        </Section>
        <Section header="Unarmed Defense" topicKey="unarmedDefenseReaction">
          <p>You dodge, block, or simply endure a bow.</p>
          <p>
            Each point Progress you get on aLow Risk and Default Effort <Pair flight self /> Challenge, plus your
            Unarmed Defense bonus and the rating of any armor you happen to be wearing, reduces the Threat dealt by an
            incoming unarmed attack. You may move 1 meter freely afterwards.
          </p>
        </Section>
        <Section header="Intuition">
          <p>
            Intuition is targeted by things that manipulate you through incomplete knowledge, such as deception, memory
            loss, or fast talk.
          </p>
          <p>
            The Progress you get on a <Pair flight self /> Challenge, plus your Intuition bonus, determines how well you
            resist the cause of this reaction. This is often done passively but is not always reliable, and therefore it
            is typically Low Effort and Default Risk. It does not provide free movement.
          </p>
        </Section>
        <Section header="Perception">
          <p>
            Perception is targeted by anything that attempts to avoid your senses, such as stealth, destroyed evidence,
            or hidden details.
          </p>
          <p>
            The Progress you get on a Focus + Far Challenge, plus your Perception bonus, determines how much you are
            aware of. This is often done passively but is not always reliable, and therefore it is typically Low Effort
            and Default Risk. It does not provide free movement.
          </p>
        </Section>
        <Section header="Willpower">
          <p>
            Willpower is targeted by anything that manipulates your emotions or instinct, such as fear, exhaustion, or
            temptation.
          </p>
          <p>
            The Progress you get on a Focus + Self Challenge, plus your Willpower bonus, determines how well you resist
            the cause of this reaction. Willpower sometimes requires significant mental load. The Effort and Risk levels
            may be Low or Default depending on the situation. It does not provide free movement.
          </p>
        </Section>
      </Section>

      <Section header="Full Actions" topicKey="fullActionsList">
        <p>
          By default non of the actions in this list are full actions unless something is making it take longer. For
          example, if you use Improvise to do something that takes time, the GM may determine that this is a full
          action. When you do a full action it takes your entire turn, consuming both your inhale and exhale actions.
        </p>
        <Section header="Inducing Cascade Events" topicKey="InducingCascadeEventActions">
          <p>
            Each Entanglement can grant the ability to induce a cascade event. Each will specify how long it takes to
            induce, but it is often a full action. Some are even slower than a full action, and therefore cannot be done
            in combat.
          </p>
        </Section>
      </Section>
    </Section>
  );
}

export default ChapterActions;
