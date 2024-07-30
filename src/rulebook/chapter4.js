import Break from "../components/break/break";
import ChapterIntro from "../components/chapter-intro/chapter-intro";
import Section from "../components/section/section";
import Logomark from "../svgs/logomark";
import Crosslink from "../components/crosslink/crosslink";
import { topics } from "../context/rulebookContext";
import Metabolism from "../components/metabolism/metabolism";
import Pair from "../components/metabolism/pair";

function Chapter4() {
  return (
    <Section coordinates={"4"} header="Combat">
      <ChapterIntro>
        <p>
          In combat, the game slows down into turns to follow the action. Fights are difficult and lethal for normal
          people, but access to
          <Crosslink target={topics.HIDDEN_METAB}>Hidden Metabolisms</Crosslink> changes this. The primitive parts of
          the brain stem that mediate the connection to the Hidden body are the same as those that manage autonomic
          processes like breathing and heart rate. Once you've gotten the feel for this connection, stressful situations
          often take on a rhythm: inhale, allocate, exhale, execute. Having foudnd this rhythm, you can take two actions
          each time it's your turn.
        </p>
        <Logomark />
      </ChapterIntro>

      <Section header="Inhale Action" isChapterIntroColumn>
        <p>
          First, take an inhale action. This can be any action, but with one requirement, only people with at least one
          current point within the
          <Crosslink target={topics.HIDDEN_METAB}>Hidden Metabolism</Crosslink> available can take inhale actions.
        </p>
      </Section>
      <Section header="Exhale Action" isChapterIntroColumn isClassified>
        <p>
          Second, take an exhale action. The exhale action can be any action. This is the only action normal people have
          access to, so once you can reliably use the inhale action too you can act twice as often as most people.
        </p>
      </Section>

      <Section header="Combat Flow">
        <p>
          The first step of combat is determining who has the initiative. Everyone involved must make a
          <Crosslink target={topics.CHALLENGE}>Challenge</Crosslink> with default Risk and Effort that requires
          <Metabolism focus />. Turns start from the highest result on this Challenge and continue to the lowest result.
        </p>
        <p>
          Determining initiative is the moment adrenaline kicks your body into high gear. Until combat ends you are
          pushing yourself to your limits, which has a few effects.
        </p>
        <ul>
          <li>
            Your <Crosslink target={topics.METABOLISM}>Metabolisms</Crosslink> regenerate more quickly. Refill half of
            their current values, rounding up to whole numbers, at the end of each round.
          </li>
          <li>
            There are a list of named actions in the next chapter, such as Melee Attack, Aim, or Move. Due to the speed
            and chaos of combat, you can only take actions from this list.
          </li>
        </ul>
        <Section header="Rounds & Turns">
          <p>
            In initiative order, everyone takes their turn doing an
            <Crosslink target={topics.INHALE_ACTION}>inhale action</Crosslink> and an
            <Crosslink target={topics.EXHALE_ACTION}>exhale action</Crosslink>. At the end of each round after everyone
            has taken a turn, regain half of your used
            <Crosslink target={topics.METABOLISM}>Metabolism</Crosslink> points. Always round up to a whole number.
          </p>
        </Section>
        <Section header="Taking Actions & Reactions">
          <p>
            Normal actions, such as <Crosslink target={topics.ATTACK}>attacking</Crosslink>, consume one of either your
            <Crosslink target={topics.INHALE_ACTION}>inhale</Crosslink> or
            <Crosslink target={topics.EXHALE_ACTION}>exhale action</Crosslink>. Occaisonally, there are
            <Crosslink target={topics.FULL_ACTION}>full actions</Crosslink>, such as inducing most
            <Crosslink target={topics.CASCADE_EVENT}>cascade events</Crosslink>, that consume both your inhale and
            exhale actions. There can also be non-actions, that consume no action or time but still must be done on your
            turn.
          </p>
          <p>
            Additionally, outside of your turns you may take reactions to the actions of others. For example, attempting
            to dodge an enemy's attack.
          </p>
          <Section header="Action Bonuses">
            <p>
              You have an Action Bonus associated with every action and reaction you can take in combat. If the action
              involves a Challenge, add this number to any Progress you get on the Challenge.
            </p>
          </Section>
        </Section>
        <Section header="Movement">
          <p>
            You can move 1 meter for free either before or after you take your inhale action and then again when you
            take you exhale action. This means you always have 2 meters of movement you can take on your turn. If you
            wish to move further, you can use the Move action as one or both of your actions.
          </p>
          <p>
            Additionally, you can move 1 meter after you take a reaction that was caused by being attacked, but not
            after a reaction caused by something else.
          </p>
          <Section header="Grids">
            <p>
              For clarity, all distances are referred to in meters. A grid map of one meter squares or hexes can be
              helpful to visualize chaotic situations, but it is not strictly necessary.
            </p>
            <p>
              Consider using square grids for indoor or urban environments. Consider using hex grids for outdoor, open,
              or organic environments.
            </p>
            <p>Consider just using your imagination for simple combats.</p>
          </Section>
        </Section>
        <Section header="Attacks">
          <p>
            Attack by taking the Unarmed, Melee, or Ranged Attack action. These actions are all a Default Risk and
            Effort Challenge that always requires <Metabolism fight />. The attack used determines which
            <Crosslink target={topics.HIDDEN_METAB}>Hidden Metabolism</Crosslink> is required; <Metabolism self /> for
            unarmed strikes,
            <Metabolism near /> for melee attacks, and <Metabolism far /> for ranged attacks.
          </p>
          <p>
            Attack Challenges do not have a Difficulty. Instead, each point of{" "}
            <Crosslink target={topics.PROGRESS}>Progress</Crosslink> that you get on an attack inflicts a point of
            <Crosslink target={topics.THREAT}>Threat</Crosslink> to the target. If you have a weapon equiped, the
            weapon's Size value is also added to the Threat dealt.
          </p>
          <p>
            You can only take an Attack action if you apply at least 1 Metabolism point to it. If you are using a
            weapon, you can only take an Attack action if you apply at least a number of metabolism point equal to the
            weapon's size.
          </p>
          <Section header="Attacking Example" isInset>
            <p>
              For your <Crosslink target={topics.INHALE_ACTION}>inhale action</Crosslink> you spend 3 of 3
              <Metabolism far /> and 1 of 4
              <Metabolism fight /> to fire a size 2 ranged weapon. This buys you 4
              <Crosslink target={topics.DICE}>dice</Crosslink>. The results are 2, 4, 4, and 5, meaning 3 points of
              Progress and therefore 3 points of <Crosslink target={topics.THREAT}>Threat</Crosslink>. Add your weapon's
              size of 2 to the Threat dealt, resulting in 5 total Threat.
            </p>
            <p>
              For your <Crosslink target={topics.EXHALE_ACTION}>exhale action</Crosslink> you spend the remaining 3 of 4
              <Metabolism fight /> and 2 of 2
              <Metabolism self /> to kick an adjacent enemy. Your 5 <Crosslink target={topics.DICE}>dice</Crosslink>
              come up 1, 1, 3, 4, and 5, creating 2<Crosslink target={topics.THREAT}>Threat</Crosslink>. Since no weapon
              was used, there is no additional Threat.
            </p>
          </Section>
        </Section>
        <Section header="Reactions">
          <p>
            When attacked, you can react outside of your turn to reduce the
            <Crosslink target={topics.THREAT}>Threat</Crosslink> you take. To do so, make a
            <Crosslink target={topics.CHALLENGE}>Challenge</Crosslink> that is Default Effort, but Low Risk. This
            Challenge requires the pairing of
            <Metabolism flight /> and the same
            <Crosslink target={topics.HIDDEN_METAB}>Hidden Metabolism</Crosslink> used by the attack. Reaction
            Challenges do not have a Difficulty, instead each point of
            <Crosslink target={topics.PROGRESS}>Progress</Crosslink> lowers the
            <Crosslink target={topics.THREAT}>Threat</Crosslink> taken by one. Any remaining
            <Crosslink target={topics.THREAT}>Threat</Crosslink> becomes
            <Crosslink target={topics.STRESS}>Stress</Crosslink> that you must distribute up between the
            <Crosslink target={topics.METABOLISM}>Metabolisms</Crosslink> you used in the reaction.
          </p>
          <p>
            Because reactions often use <Metabolism flight />, your current <Metabolism flight /> is a good indicator of
            how much
            <Crosslink target={topics.THREAT}>Threat</Crosslink> you can handle this round, and your maximum
            <Metabolism flight /> is a good indicator of how much <Crosslink target={topics.STRESS}>Stress</Crosslink>
            you can take in combat before being <Crosslink target={topics.INJURY}>injured</Crosslink>.
          </p>
          <Section header="Reactions Example" isInset>
            <p>
              You were <Crosslink target={topics.ATTACK}>attacked</Crosslink> with a melee weapon for 5
              <Crosslink target={topics.THREAT}>Threat</Crosslink>. You must
              <Crosslink target={topics.REACTION}>react</Crosslink> with your
              <Pair flight near /> <Crosslink target={topics.STRESS}>pairing</Crosslink>.
            </p>
            <p>
              You spend 2 out of 3 <Metabolism flight /> and 1 out of 1 <Metabolism near />, a total of 3 points.
            </p>
            <p>
              This reduces the <Crosslink target={topics.THREAT}>Threat</Crosslink> dealt by 3, but there is still 2
              points of Threat remaining, so you take 2<Crosslink target={topics.STRESS}>Stress</Crosslink>. You decide
              to put all of it in
              <Metabolism flight /> to avoid reducing <Metabolism near /> to 0.
            </p>
            <p>
              Due to this Stress you now have 1 out of 1 <Metabolism flight /> and 0 out of 1 <Metabolism near />
              available.
            </p>
            <p>
              Another attack does 2 <Crosslink target={topics.THREAT}>Threat</Crosslink>, you spend your last point of
              <Metabolism flight /> to reduce the Threat to 1. You now must decide 1 Stress is dealt to
              <Metabolism flight /> reducing the max to 0 and injuring you or if it is dealt to <Metabolism near />
              reducing the max to 0 and dissociating you.
            </p>
          </Section>
        </Section>
        <Section header="Risk and Effort in Combat">
          <p>
            Using advantage in combat to improve the Risk or Effort of your actions will greatly improve your odds of
            survival. You can get advantage, or disadvantage, from the situation in combat. For example, if you unseen
            by the enemy or the enemy is restrained in someway, you will have advantage when you attack them. Outside of
            combat you can often apply a Trait in order to get advantage, however Traits you have from character
            creation are not typically relevant in combat. As you spend experience you may acquire specific combat
            Traits that state precisely when they are relevant. You can only apply a Trait one time per round, even if
            you have multiple Traits that become relevant during the round.
          </p>
        </Section>
        <Section header="Acting on Empty">
          <p>
            You may find find you are don't want attack with one or both of you actions on a turn because you do not
            have enough
            <Crosslink target={topics.ADVANTAGE}>Metabolism</Crosslink> points or want to save them for later. When this
            happens you still have options. For example, every basic action can provide some benefit that doesn't
            require a Challenge or spending metabolism points.
          </p>
          <p>
            If you still wish to attack when you have 0 points in your Metabolism pairing, or fewer points than the size
            of the weapon you wish to use, you still have the option to make a desperate attack. However, doing this
            requires both your inhale and exhale actions and increases the Risk level of the attack. Resolve this attack
            as if you applied 1 metabolism point to it and your weapon's size value adds dice to the Challenge instead
            of adding Threat.
          </p>
        </Section>
        <Section header="Ending Combat">
          <p>
            Combat ends when all aggressors of one side are either injured, dissociated, or unconscious. At this point
            regain all of your spent metabolism points and you may resume acting normally, including{" "}
            <Crosslink target={topics.PUSH_YRSELF}>Pushing Yourself</Crosslink> and
            <Crosslink target={topics.TAKE_TIME}>Taking Time</Crosslink> during
            <Crosslink target={topics.CHALLENGE}>Challenges</Crosslink>.
          </p>
        </Section>
      </Section>
      {/* @todo see if actions fit here... */}
      <Section header="Actions">
        <p>
          In combat you are limited to taking a list of specific actions. All actions are associated with an Action
          Bonus representing any unusual skill your character may have with this action. Outside of combat you are free
          to do anything you describe, but you can still take the specific actions from this list and apply their Action
          Bonuses.
        </p>
        <Section header="Attack Actions">
          <p>
            Attack actions always require a Default Risk and Effort Challenge requiring the action's related
            metabolisms. The appropriate Action Bonus is added to the Progress of this Challenge. If you are using a
            weapon, you must spend a minimum number of Metabolism points equal to the weapon's size in order to attack
            with this weapon. Targets of these attacks can use reactions to reduce the Threat dealt to them and can then
            move 1 meter for free.
          </p>
          <Section header="Melee Attack">
            <p>You take a swing at an adjacent opponent with whatever weapon you have in hand.</p>
            <p>
              Requires <Pair fight near />. The amount of Progress you get, plus the weapon's Size rating, is dealt to
              the target as Threat.
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
              Requires <Pair fight far />. The amount of Progress you get, plus the weapon's Size rating, is dealt to
              the target as Threat.
            </p>
            <p>
              Alternatively, if you would deal more Threat than the target's Reaction and the target is behind cover,
              you can choose to deal no Threat and instead suppress the target. The target gets the Suppressed state
              with an intensity of 1 + Ranged Attack bonus.
            </p>
          </Section>
          <Section header="Unarmed Attack">
            <p>You lash out at an adjacent opponent with a punch, kick, elbow, grab, shove, or other blow.</p>
            <p>
              Requires <Pair fight self />. The amount of Progress you get is dealt to the target as Threat.
            </p>
            <p>
              Alternatively, if you would deal more Threat than the target's Reaction, you can choose to deal no Threat
              and instead shove or grab the target. If you shove, move them away from you by 1 + Unarmed Attack bonus
              meters. If you grab, you give the target the Grappled state with an intensity of 1 + Unarmed Attack bonus.
            </p>
          </Section>
        </Section>
        <Section header="Basic Actions">
          <p>
            Basic actions can be done as either your inhale or exhale action, or over the course of a few seconds out of
            combat. These actions often do not require Challenges, so they can be taken without spending any resources.
            However, some provide ways to use a Challenge to improve their effects.
          </p>
          <Section header="Aim">
            <p>You take a moment to line up an attack.</p>
            <p>
              Choose a target. If the next attack you make is on this target, add your Aim Bonus to any Threat it deals
              and disadvantage to the target's reaction.
            </p>
          </Section>
          <Section header="Heal">
            <p>
              You instinctively pull resources stored in your hidden body to roughly seal the wounds of a target's
              physical body just enough to keep it moving.
            </p>
            <p>
              Remove one Stress from all of the target's Physical Metabolisms that currently have a maximum equal or
              lower than your Heal bonus, removing any Injury States in the process.
            </p>
          </Section>
          <Section header="Hide">
            <p>You take cover to protect yourself from incoming threats or hide from your enemies.</p>
            <p>
              You can only take this action if you are next to, or use your free movement to get next to, something that
              could plausibly be used as cover. The value of the cover increases by your Hide bonus. Anyone the cover
              protects you from can make a Low Effort Perception Reaction. Anyone with a result lower than the cover's
              increased value no longer knows your exact position and can't target you directly. These benefits end
              whenever you move more than a meter from your source of cover.
            </p>
            <p>
              You can also take this action out of combat to act stealthily. When you do so treat it as a Challenge and
              anything with a lower result on a Low Effort Perception Reaction than your Progress is unaware of you.
            </p>
          </Section>
          <Section header="Improvise">
            <p>You interact with something in the environment, help an ally, or execute a clever plan.</p>
            <p>
              You can use Improvise to attempt any other course of action that could plausibly be taken, but isn't
              covered in the other actions. If the GM decides this action has no Difficulty, or a Difficulty less than
              your Improvise bonus, it simply occurs successfully, otherwise you must resolve this action as a
              Challenge. Occaisonally, very simple interactions with the environment might even be non-actions.
            </p>
            <p>
              Alternatively, you may use Improvise to come up with a plan that could plausibly improve the outcome of a
              specific action taken by you or someone else you can see. If the next action taken by the target, whether
              it is you or someone else, is the planned action, it gains advantage and has your Improvise bonus added to
              the Progress.
            </p>
            <p>
              When you do this, the Improvise action takes as much time (an action, an hour, etc) as the original
              action, meaning that if you use this action to help yourself the time consumed is doubled and if you help
              someone else you must continue helping them for the whole duration of their action.
            </p>
          </Section>
          <Section header="Manipulate">
            {/* @todo lets come back to this one.. */}
            <p>
              You attempt to influence someone else socially, threatening, taunting, distracting, or de-escalating them.
            </p>
            <p>
              Pick a target who makes a Low Effort Willpower reaction. If the result is lower than 1 + your Manipulate
              bonus, they gain a State of your choice between Afraid, Calmed, Enthralled, or Taunted until the start of
              your next turn.
            </p>
            <p>
              If you do this as a full action, the target's Willpower Reaction must instead beat the results of a
              <Pair focus far /> Challenge, plus your Manipulate Bonus. If the reaction has a lower result, they gain
              the chosen State with an intensity equal the difference between it and your Challenge.
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
              Challenge you do not need to choose a Metabolism pairing and may freely spend any combination of points
              from all of your Metabolisms. Each point of Progress lets you move 1 additional meter.
            </p>
            <p>
              Spaces with obstructions may have a Difficulty assigned to them. Instead of using 1 meter of movement to
              enter these spaces you must use a number of meters equal to the Difficulty. For example you may need to
              spend 2 meters of movement on spaces that require traversing difficult terrain, balancing, or opening a
              door, and even 3 meters for climbing a meter vertically or scrambling over a boulder. Particularly
              dangerous terrain may also increase the Risk level, and the GM may even add consequences, such as falling,
              for failing to get enough Progress to enter the dangerous space.
            </p>
          </Section>
          <Section header="Push">
            <p>With great effort, you push yourself to the limit to get an important task done.</p>
            <p>
              You can only take this action immediately after attempting a different action or Challenge with
              unsatisfactory results. This extends the original attempt, replacing the results. Take any number of
              points of unavoidable Stress to <Metabolism focus />, as long as it is lower than its current maximum and
              wont cause injury. Add this number and your Push bonus to any bonus that was applied to the original task.
              If a Challenge was involved, treat it as if you spent 1 additional point from each involved Metabolism.
              Then resolve the original action with these new results.
            </p>
          </Section>
          <Section header="Ready">
            <p>You prepare yourself to handle an anticipated event.</p>
            <p>
              Choose a single, simple, and discernible trigger event and a single basic or attack action you wish to
              take when it occurs. For example you may wish to attack a target when it enters your reach, grapple a
              target that attempts to leave your reach, shoot a target when it leaves cover, or run when a door opens.
              After the trigger event occurs, your planned action also occurs. However, any Challenge the action may
              have required is not completed. Instead treat it as if you got an amount of Progress equal to 1 + your
              Ready bonus.
            </p>
          </Section>
          <Section header="Rest">
            <p>
              You take a moment to reorient and catch your breath. The benefits of this depend on how long you spend
              doing it.
            </p>
            <p>
              As a single basic action in combat, you recover a number of any spent Metabolism points equal to your Rest
              bonus + 1 or reduce the intensity of any state by your Rest bonus + 1.
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
        <Section header="Reactions">
          <p>
            Reactions happen outside of your turn in response to the actions of others. The only limit to how often you
            can react in or out of combat is how many Metabolism points you are willing to spend. always add the Action
            Bonus you have for each reaction to the Progress you make.
          </p>
          <Section header="Melee Defense">
            <p>You deflect or dodge a melee weapon attack.</p>
            <p>
              Each point of Progress you get on a Low Risk and Default Effort <Pair flight near /> Challenge, plus your
              Melee Defense bonus and the rating of any armor you happen to be wearing, reduces the Threat dealt by an
              incoming melee attack. You may move 1 meter freely afterwards.
            </p>
          </Section>
          <Section header="Ranged Defense">
            <p>You attempt to predict your opponent's aim and get out of the path of their projectiles.</p>
            <p>
              Each point Progress you get on a Low Risk and Default Effort <Pair flight far /> Challenge, plus your
              Ranged Defense bonus and the rating of any armor you happen to be wearing, reduces the Threat dealt by an
              incoming ranged attack. You may move 1 meter freely afterwards.
            </p>
          </Section>
          <Section header="Unarmed Defense">
            <p>You dodge, block, or simply endure a bow.</p>
            <p>
              Each point Progress you get on aLow Risk and Default Effort <Pair flight self /> Challenge, plus your
              Unarmed Defense bonus and the rating of any armor you happen to be wearing, reduces the Threat dealt by an
              incoming unarmed attack. You may move 1 meter freely afterwards.
            </p>
          </Section>
          <Section header="Intuition">
            <p>
              Intuition is targeted by things that manipulate you through incomplete knowledge, such as deception,
              memory loss, or fast talk.
            </p>
            <p>
              The Progress you get on a <Pair flight self /> Challenge, plus your Intuition bonus, determines how well
              you resist the cause of this reaction. This is often done passively but is not always reliable, and
              therefore it is typically Low Effort and Default Risk. It does not provide free movement.
            </p>
          </Section>
          <Section header="Perception">
            <p>
              Perception is targeted by anything that attempts to avoid your senses, such as stealth, destroyed
              evidence, or hidden details.
            </p>
            <p>
              The Progress you get on a Focus + Far Challenge, plus your Perception bonus, determines how much you are
              aware of. This is often done passively but is not always reliable, and therefore it is typically Low
              Effort and Default Risk. It does not provide free movement.
            </p>
          </Section>
          <Section header="Willpower">
            <p>
              Willpower is targeted by anything that manipulates your emotions or instinct, such as fear, exhaustion, or
              temptation.
            </p>
            <p>
              The Progress you get on a Focus + Self Challenge, plus your Willpower bonus, determines how well you
              resist the cause of this reaction. Willpower sometimes requires significant mental load. The Effort and
              Risk levels may be Low or Default depending on the situation. It does not provide free movement.
            </p>
          </Section>
        </Section>
      </Section>

      <Section header="Equipment">
        <Section header="Armor">
          <p>
            All armor has a Defense value. Each point of Defense on worn armor reduces
            <Crosslink target={topics.THREAT}>Threat</Crosslink> by 1 on all incoming
            <Crosslink target={topics.ATTACK}>attacks</Crosslink>. Armor with Defense 1 can be concealed under or worn
            as casual clothing. Armor with Defense 3 is heavy and slows you down, reactions do not provide free movement
            while you are wearing it.
          </p>
          <Section header="Types of Armor">
            <table>
              <thead>
                <tr>
                  <td>Defense</td>
                  <td>Examples</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Kevlar, leather</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Light tactical armor, riot gear</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Heavy infantry armor with trauma plates</td>
                </tr>
              </tbody>
            </table>
          </Section>
        </Section>
        <Section header="Weapons">
          <p>
            What you choose to attack with determines what <Crosslink target={topics.Metabolism}>metabolisms</Crosslink>{" "}
            are used to attack and defend. In general all attacks require
            <Metabolism fight />, and all reactions require <Metabolism flight />, unarmed combat uses{" "}
            <Metabolism self />, melee weapons use
            <Metabolism near />, and ranged weapons use <Metabolism far />.
          </p>
          <p>
            Each weapon has a Size value. This number indicates the amount of extra
            <Crosslink target={topics.THREAT}>Threat</Crosslink> added to attacks. It also indicates the minimum amount
            of Metabolism points that must be spent to attack with the weapon, if you do not have this amount available,
            you can only use this weapon with a desperate attack. Size 1 can be concealed in casual clothing, Size 2
            cannot, and Size 3 or above requires both hands. Any weapon Size 4 or above requires a
            <Crosslink target={topics.FULL_ACTION}>full action</Crosslink> to use and causes any reactions to it to
            become Default Risk instead of Low.
          </p>
          <Section header="Types of Weapons">
            <p>Other than unarmed, each category of weapons has a special property common to all similar weapons.</p>
            <h5>Unarmed</h5>
            <table>
              <thead>
                <tr>
                  <td>Size</td>
                  <td>Examples</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>0</td>
                  <td>Punch, kick, elbow, etc.</td>
                </tr>
              </tbody>
            </table>
            <h5>Blunt</h5>
            <p>
              When attackign with blunt weapons the defender uses the normal reaction, but the attacker can choose deal
              any unblocked Stress as if the reaction's metabolism pair used <Metabolism focus />
              instead of <Metabolism flight />.
            </p>
            <table>
              <thead>
                <tr>
                  <td>Size</td>
                  <td>Examples</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Night stick</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Small hammer, pool cue</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Baseball bat</td>
                </tr>
                <tr>
                  <td>4*</td>
                  <td>Sledge hammer</td>
                </tr>
              </tbody>
            </table>
            <h5>Blades</h5>
            <p>
              All blades deal 1 extra <Crosslink target={topics.THREAT}>Threat</Crosslink> above what their Size
              normally would.
            </p>
            <table>
              <thead>
                <tr>
                  <td>Size</td>
                  <td>Examples</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Kitchen knife, hunting knife, box cutter</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Machete, hand axe, mall ninja gear</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Fire axe, katana</td>
                </tr>
                <tr>
                  <td>4*</td>
                  <td>Great sword</td>
                </tr>
              </tbody>
            </table>
            <h5>Ranged</h5>
            <p>Ranged weapons can target anything within your line of sight.</p>
            <table>
              <thead>
                <tr>
                  <td>Size</td>
                  <td>Examples</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>9mm handgun</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Heavy magnum revolver, small SMG</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Rifle, shotgun</td>
                </tr>
                <tr>
                  <td>4*</td>
                  <td>Assault rifle</td>
                </tr>
                <tr>
                  <td>5*</td>
                  <td>Machine gun</td>
                </tr>
              </tbody>
            </table>
          </Section>
        </Section>
      </Section>
      <Break page />
    </Section>
  );
}

export default Chapter4;
