import { useContext } from "react";
import { RulebookContext } from "../context/rulebookContext";
// import Break from "../components/break/break";
import ChapterIntroSpread from "../components/chapter-intro-spread/chapter-intro-spread";
import Section from "../components/section/section";
// import Logomark from "../svgs/logomark";
import Crosslink from "../components/crosslink/crosslink";
import Metabolism from "../components/metabolism/metabolism";
import Pair from "../components/metabolism/pair";

function ChapterCombat() {
  const { topicMap } = useContext(RulebookContext);
  const linkMap = topicMap.current;

  return (
    <Section
      coordinates={"4"}
      header="Combat"
      introContent={
        <ChapterIntroSpread
          chapterNumber={4}
          title="Combat"
          leftPageContent={
            <>
              <p>
                In combat, the game slows down into turns to follow the action. Fights are too fast and chaotic for
                normal humans to act effectively, limiting them to one action per turn. Learning to directly access
                Hidden Metabolisms grants you the parallel processing needed overcome this limit and react efficiently.
                The primitive parts of the brain stem that mediate the connection to the Hidden body are the same as
                those that manage autonomic rhythmic processes like breathing and heart rate. Once you have the feel for
                connecting to your Hidden Body, stressful situations start take on a similar biological rhythm: inhale,
                allocate; exhale, execute. Having found this rhythm, you can take two actions each time it's your turn,
                one inhale action and one exhale action.
              </p>
            </>
          }
          rightPageContent={
            <>
              <h2>Inhale Action</h2>
              <p>
                First, take an inhale action. Inhale actions are typically preparatory in nature, lining up things into
                position and coiling up the resources needed to spring into action.
              </p>
              <h2>Exhale Action</h2>
              <p>
                Second, take an exhale action. Exhale actions execute on what you set up in the inhale action, often in
                the form of an attack or cascade event.
              </p>
              <h2>Deep Breath</h2>
              <p>
                If there isn't an exhale action you want to take this turn, you can take a deep breath in order to do
                two inhale actions instead. Doing so allows the benefits of some inhale actions to last longer than they
                normally would.
              </p>
            </>
          }
        ></ChapterIntroSpread>
      }
    >
      <Section header="Combat Flow">
        <p>
          When combat starts, the gameplay breaks down into turns. The first step is determining who has the initiative
          and the turn order. Everyone involved must make a Challenge with default Risk and Effort that requires Focus.
          The Hidden Metabolism used in this Challenge's pair is chosen by the players. Turns then start from whoever
          got the highest result on this Challenge and then continue down the line to the lowest result.{" "}
        </p>
        <p>
          Determining initiative is the moment adrenaline kicks your body into high gear. Until combat ends you are
          pushing yourself to your limits, which has a few effects:{" "}
        </p>
        <ul>
          <li>
            Your Metabolisms regenerate more quickly. Refill half of their current values, rounding up to whole numbers,
            at the end of each round.
          </li>
          <li>
            Because you are already acting at your limits, you cannot Push yourself to regain additional Metabolism
            points during combat.
          </li>
          <li>
            There are a list of named inhale and exhale actions in the next chapter, such as Melee Attack, Aim, or Move.
            Due to the speed and chaos of combat, you can only take actions from this list.
          </li>
          <li>
            Fights move too fast to apply Traits to combat actions, you must use the Improvise action to apply a Trait.
          </li>
        </ul>
        <Section header="Rounds & Turns">
          <p>
            In initiative order, everyone takes their turn. The player characters and any other entangled individuals,
            those that have at least 1 in any Hidden Metabolism score, can take one inhale action followed by one exhale
            action on their turn. These actions must be taken this order, inhale first, exhale second.
          </p>
          <p>Normal unentangled humans act more slowly, they only get one action per turn but it can be any type. </p>
          <p>
            At the end of each round after everyone has taken a turn, everyone regains Metabolism points equal to half
            the Capacity of each Metabolism. Always round up to a whole number, with a minimum of 1 point regained.{" "}
          </p>
          <p>
            Rounds last a few seconds, but have no strictly defined duration. The duration of any effect specified in
            units longer than rounds is assumed to last an entire fight.
          </p>
        </Section>
      </Section>

      <Section header="Actions & Reactions" topicKey="ActionsAndReactions">
        <p>
          Outside of small non-actions that take no additional time, such as speaking a few words, everything you do in
          combat will be an inhale or exhale action taken on your turn, or a reaction taken in response to something
          happening to you outside your turn. Inhale and exhale actions both must come from their separate lists below.
          The full definition and rules for each action can be found in the Actions chapter.{" "}
        </p>
        <Section header="Inhale Actions">
          <p>Inhale actions focus on getting into position and setting up for your next move. </p>
          <ul>
            <li>
              <strong>Aim:</strong> Prepare to attack by lining up your target.
            </li>
            <li>
              <strong>Allocate:</strong> Prepare to induce a cascade event by concentrating the resources you'll put
              into it.
            </li>
            <li>
              <strong>Evade:</strong> Prepare to defend yourself or get into cover.
            </li>
            <li>
              <strong>Heal:</strong> Supernaturally repair your injuries, or use medical supplies to repair others.
            </li>
            <li>
              <strong>Improvise:</strong> Search for an advantage, apply a Trait, help a friend, or take some action
              outside of this list.
            </li>
            <li>
              <strong>Interact:</strong> Draw a weapon, use a tool, open a door, throw a switch, or otherwise interact
              with objects.
            </li>
            <li>
              <strong>Manipulate:</strong> Change the social context of the fight, deescalate, taunt, intimidate, or
              hide.
            </li>
            <li>
              <strong>Move:</strong> Run to another location or traverse an obstacle.
            </li>
            <li>
              <strong>Rest:</strong> Catch your breath to recover more Metabolism points.
            </li>
          </ul>
        </Section>
        <Section header="Exhale Actions">
          <p>Exhale actions focus on attacking the enemy and executing your plans.</p>
          <ul>
            <li>
              <strong>Melee Attack:</strong> Use any close combat melee weapon you are holding to harm or move an enemy.
            </li>
            <li>
              <strong>Ranged Attack:</strong> Use a firearm, thrown object, or other ranged weapon to harm or suppress
              an enemy.
            </li>
            <li>
              <strong>Unarmed Attack:</strong> Use a punch, kick, elbow, or grapple to harm or subdue an enemy.
            </li>
            <li>
              <strong>Induce a cascade event:</strong> Create a supernatural effect.
            </li>
          </ul>
        </Section>
        <Section header="Reactions">
          <p>
            Reactions happen when something triggers them, even if you decide not to spend any Metabolism points on
            them. They are your defense against harm or manipulation.
          </p>
          <ul>
            <li>
              <strong>Unarmed Defense:</strong> Dodge, block, tank, or slip out of an unarmed strike or grab.
            </li>
            <li>
              <strong>Melee Defense:</strong> Dodge or deflect a close combat weapon strike.
            </li>
            <li>
              <strong>Ranged Defense:</strong> Predict, avoid, or take cover from a ranged attack.
            </li>
            <li>
              <strong>Willpower:</strong> Resist manipulation, temptation, or giving in to hardship.
            </li>
            <li>
              <strong>Intuition:</strong> Get a clear sense of an event, situation, deception, or motive.
            </li>
            <li>
              <strong>Perception:</strong> Notice a detail being concealed from you.
            </li>
          </ul>
        </Section>
        <Section header="Action Bonuses">
          <p>
            You have an Action Bonus associated with every action and reaction you can take in combat. If the action
            involves a Challenge, add this bonus to the number of Metabolism points allocated to the challenge.{" "}
          </p>
          <p>
            For example, if you have an Unarmed Attack bonus of 2, and you spend 4 Metabolism points on the action,
            you've effectively allocated 6 points.
          </p>
        </Section>
        <Section header="Prepared Actions">
          <p>
            Some of the Inhale actions specifically Prepare another action. For example, the Aim action Prepares any
            Attack action. This preparation only applies to the next qualifying action or reaction you take, and you can
            have a single action or reaction Prepared at one time. Typically, preparation on only lasts until the start
            of your next turn and then is lost if it is unused, however, if you have used the deep breath option to take
            two inhale actions on your turn the preparation lasts until the end of your next turn instead.
          </p>
          <p>
            When you take a Prepared action, you may add Focus as a third Metabolism to the Metabolism pair used in any
            Challenge done during this action. If Focus is already a required part of the pairing used in a Prepared
            action, you may instead choose any other Metabolism to be the third component.
          </p>
          <p>
            For example, as your inhale action, you use Evade, which Prepares the next Defense reaction you take. You
            then complete your turn by using your exhale action to attack. Before your next turn starts, you get
            targeted by 2 ranged attacks. The first you are Prepared for, you can spend Flight, Far, and Focus on it.
            When the second hits, you've already used your preparation so you can only spend Flight and Far.
          </p>
        </Section>
      </Section>

      <Section header="Attacking & Defending">
        <Section header="Making Attacks">
          <p>
            Attack by taking Unarmed, Melee, or Ranged Attack as your exhale action. These actions are described in full
            detail in the Actions chapter, but they are all a Default Risk and Effort Challenge that always requires
            Fight. The attack used determines which Hidden Metabolism is required; Self for unarmed strikes, Near for
            melee attacks, and Far for ranged attacks. Attack Challenges have a metric Goal to deal Threat, each point
            of Progress you apply to it inflicts a point of Threat to the target.{" "}
          </p>
          <p>
            Weapons deal additional Threat, but require additional effort to use. If you are using a weapon, the
            weapon's Size value is also added to the Threat dealt. However, to attack with a weapon you must allocate a
            minimum number of Metabolism points equal to the weapon's Size.
          </p>
          <Section header="Attacking Example" isInset>
            <p>
              For your exhale action you attack with a size 2 ranged weapon. You must allocate at least 2 Metabolism
              points to use this weapon. You decide to allocate more than this to get a solid attack in, by spending 3
              Fight and 1 Far. This allocates 4 Metabolism points, buying you 4 dice to roll. The results are 2, 4, 4,
              and 5. The 3 successful dice mean 3 points of Progress are created. Add your weapon's size of 2 to the
              Progress, resulting in 5 total Threat dealt.
            </p>
          </Section>
        </Section>
        <Section header="Using Defense Reactions">
          <p>
            When attacked, you must react outside of your turn to reduce the Threat you take. To do so, use the Unarmed,
            Melee, or Ranged Defense reaction that matches the type of attack done to you. The full details of these
            reactions are described in the Actions chapter, but all require you to make a Challenge that is Default
            Effort, but Low Risk. This Challenge requires the pairing of Flight and the same Hidden Metabolism used by
            the attack. Reaction Challenges have a metric Goal, each point of Progress applied to it lowers the Threat
            taken by one. Any Threat remaining after this reduction becomes Stress that you must distribute between the
            Metabolisms you used in the reaction.{" "}
          </p>
          <p>
            Because reactions typically use Flight and their low Risk level doesn't require dice, your current Flight is
            a good indicator of how much Threat you can handle this round, and your Flight capacity is a good indicator
            of how much Stress you can take in combat before being injured.
          </p>
          <Section header="DefenseReactions Example" isInset>
            <p>
              An enemy took a swing at you with a baseball bat in a Melee Attack dealing 6 Threat. You must use the
              Melee Defense reaction to defend yourself, requiring the Flight + Near pairing. Your Flight is at its
              capacity of 3 and Near is at its capacity of 1, so you decide to spend all 4 available points. This
              reduces the Threat dealt by 4, but there is still 2 points of Threat remaining, so you take 2 Stress. You
              decide to put all of it in Flight to avoid reducing Near to 0. After taking this Stress, both Flight and
              Near now have a current value of 0 out of capacity of 1.
            </p>
            <p>
              Another Melee Attack comes your way, but fortunately it's much smaller, dealing only 1 Threat. However,
              you have no Metabolism points left to defend yourself in the Melee Defense reaction. You now must decide
              if this 1 Stress is dealt to Flight reducing its capacity to 0 and injuring you or if it is dealt to Near
              reducing the capacity to 0 and dissociating you.
            </p>
          </Section>
        </Section>
        <Section header="Acting on Empty">
          <p>
            You may find that you do not have enough Metabolism points available to take an action you want to. If an
            action or reaction has been Prepared, you can still take it even if you are unable to allocate enough
            Metabolism points to do so. For example, if you are using a weapon of size 3 you normally must allocate at
            least 3 points to the action, but if it was Prepared you could still do it for less. When you do so, you
            must allocate every available Metabolism point in the involved Metabolisms, you can then resolve this action
            normally. If you cannot allocate a even single point, resolve the action or reaction as if you allocated 1
            point.
          </p>
          <p>
            For example, you want to strike you opponent with your size 3 fire axe, but you've already taken a beating.
            You have only 1 Fight and 0 Near left, not enough to swing a size 3 weapon. So you use Aim to Prepare this
            Melee Attack, which brings Focus into the action as well, but you also only have 1 Focus left. Your 2
            available points still aren't enough to make this attack, but because it is Prepared you can anyways. When
            you make this attack you must allocate both points, but otherwise you can resolve it normally.
          </p>
        </Section>
      </Section>

      <Section header="Combat Geography">
        <p>
          Surviving in combat will often require you to move around the battlefield and take advantage of the terrain.{" "}
        </p>
        <Section header="Movement">
          <p>
            You can move 1 meter for free either before or after you take any action you take on your turn. This means
            you always have 2 meters of movement you can take on your turn, but each move is paired to one action so you
            can't take both moves together at the start or end of your turn.{" "}
          </p>
          <p>
            Additionally, the first time you are attacked in a round, you can move 1 meter as you make a reaction to
            this attack. This move happens at the same time as the attack triggering it, the attack still hits you even
            if you move out of its reach. If you use this to move into cover, the triggering attack treats it as partial
            cover.
          </p>
          <p>
            The movement granted as part of actions and reactions can only be used to enter normal unoccupied terrain.
            If you wish to move further, enter difficult terrain, or traverse obstacles, you must use the Move action.
            The move action is typically a low risk and default effort Challenge, so each Metabolism point you allocate
            to it creates a point of Progress, and each point of Progress provides 1 meter of movement.
          </p>
        </Section>
        <Section header="Grids">
          <p>
            For clarity, all distances are referred to in meters. A grid map of one meter squares or hexes can be
            helpful to visualize chaotic situations, but it is not strictly necessary.
          </p>
          <p>
            Consider using square grids for indoor or urban environments. Consider using hex grids for outdoor, open, or
            organic environments.
          </p>
          <p>Consider just using your imagination for simple combats.</p>
        </Section>
        <Section header="Terrain">
          <p>
            Rough terrain and obstacles can hinder your movement. Each one meter space has a difficulty number assigned
            to it, usually this number is 1 for normal unimpeded terrain. The difficulty number is the number of meters
            of movement needed to enter this space. When it is 1 you can move freely and normally, 1 meter of movement
            moves you 1 meter.
          </p>
          <Section header="Difficult Terrain">
            <p>
              When terrain gets difficult to traverse or contains obstacles you must climb, jump, crawl, balance, swim,
              or otherwise traverse, the difficulty increases above 1. Things like uneven rubble, deep mud, steep
              stairs, thick crowds, ladders, or sliding across the roof of a car might have a difficulty of 2, requiring
              2 meters of movement to enter these spaces. Wading through waist deep water, climbing a drain pipe,
              pushing through a dense thicket, or balancing across a narrow beam may require 3 meters of movement per
              space or even more.
            </p>
            <p>
              Free movement provided by taking actions is limited to 1 meter per action, and therefore cannot be used to
              enter any terrain with a difficulty above 1. The Move action must be taken to enter any space with a
              difficulty above 1.
            </p>
          </Section>
          <Section header="Risky Obstacles">
            <p>
              In general obstacles are treated the same as any other terrain, but depending on their nature may have
              other restrictions. A space with an obstacle may allow you to move through it, but not stop in it. For
              example, any object you can jump over but not stand on.
            </p>
            <p>
              Obstacles may also introduce risks into movement. The Move action is normally a low Risk and default
              Effort Challenge with a single metric Goal indicating how many meters you can move. However, if the
              desired path crosses an obstacle that presents a risk of failing to traverse it, such as a slippery climb,
              then the Risk level increases to default. Similarly, if an obstacle could physically harm you, such as a
              thorny ticket or razor wire fence, the Effort level increases to high. A truly critical and difficult
              obstacle can even introduce additional fixed Goal to the Challenge that must be met to enter the space.
            </p>
          </Section>
        </Section>
      </Section>

      <Section header="Combat Tactics">
        <Section header="Advantage & Disadvantage in Combat">
          <p>
            Using advantage in combat to improve the Risk or Effort of your actions will greatly improve your odds of
            survival. You can get advantage, or disadvantage, from the situation in combat. For example, you might have
            advantage while attacking a prone or restrained opponent, or disadvantage when you are attacking someone on
            higher ground.
          </p>
          <p>
            Outside of combat you can often apply a Trait in order to get advantage, however in the chaos of combat you
            must use the Improvise action to apply a Trait. Even when you don't have a Trait to apply, you can use
            Improvise to impose advantage or disadvantage, for example throwing a drink in someone's eyes or pulling the
            rug out from under their feat could create add advantage to your next attack or their next defensive
            reaction.
          </p>
        </Section>
        <Section header="Stealth">
          <p>Stealth and deception can be the difference between victory and defeat.</p>
          <Section header="Ambushes">
            <p>
              Any combatants that are not aware of the presence enemies when initiative is determined are considered to
              be surprised. When a surprised combatant takes their turn during the first round of combat, they cannot
              take any exhale actions.
            </p>
          </Section>
          <Section header="Concealment">
            <p>
              Any time the target of an attack cannot be clearly seen by the attacker, whether due to darkness,
              blindness, or cover, then the attack becomes high Risk. Concealment can be caused by being fully hidden
              behind objects, even if those objects are not sturdy enough to provide real cover.
            </p>
          </Section>
          <Section header="Hiding">
            <p>
              If you are concealed, or have partial or full cover, you can use the Manipulate action to hide. If you
              succeed, enemies no longer know exactly which space you occupy. Reactions a hidden character makes to
              attacks targeting them are low Effort. Attacks a hidden character makes on someone they are hidden from
              have advantage.
            </p>
            <p>
              If you take an Attack action, a loud noise, or move outside of cover hiding you, you are no longer hidden.
            </p>
          </Section>
        </Section>
        <Section header="Cover">
          <p>
            Any obstacle sturdy enough to interfere with an attack can be used as cover. Depending on how much the cover
            blocks the target from the attacker, it may be partial cover or full cover. The level of cover is determined
            by the line of sight between each combatant, you may have cover against an enemy in one location and not
            have any cover against any enemy in a different location.
          </p>
          <Section header="Partial Cover">
            <p>
              Cover that blocks a significant portion of your body, but not all of it, is partial cover. An attacker
              targeting someone in partial cover has the Threat their attack deals reduced by 3. Depending on the
              position of the cover, it may provide cover in both directions or only one. For example, if you are
              standing directly behind a waist high barrier, you have partial cover from attackers on the other side,
              but your attacks are unimpeded so they do not have cover from you.
            </p>
            <p>
              If you are not in cover, but you use the free movement provided by a defensive reaction to enter cover, it
              always counts as partial cover for the attack that triggers the reaction, no matter how large it is.
            </p>
          </Section>
          <Section header="Full Cover">
            <p>
              Cover that completely breaks line of sight to your entire body is full cover. Full cover works in both
              directions, you cannot be attacked by someone you have full cover from and you cannot attack them either.
              If this attack is attempted it deals no Threat, but may damage the cover.
            </p>
            <p>
              If you are in partial cover, you can use the Evade action to duck behind it and treat it as full cover.
            </p>
          </Section>
          <Section header="Destroying Cover">
            <p>
              Attacks targeting someone behind it or targeting the cover itself may damage it. Damaged full cover
              becomes partial cover, and damaged partial cover is destroyed entirely. It is up to the GM if cover is
              damaged, depending on the material the cover is made of and the size value of the weapon used. A
              reinforced concrete wall may never be damaged, but a sturdy wooden crate might be damaged by any weapon of
              size 3 or larger.
            </p>
          </Section>
        </Section>
        <Section header="Delaying Actions">
          <p>
            If you wish to take an action in response to an anticipated event instead of on your turn, you can delay
            your action. As an inhale action, choose a single, simple, and discernible trigger event and an action you
            wish to take when it occurs. Your turn then ends. If your chosen trigger event occurs, then you can take
            your chosen action immediately after it. If the trigger does not occur before your next turn, then planned
            action is lost.
          </p>
        </Section>
      </Section>

      <Section header="Ending Combat">
        <p>
          Combat ends when all aggressors of one side are too injured or dissociated to continue fighting, when one side
          is fleeing, or when everyone involved has been deescalated. At this point regain all of your spent metabolism
          points, stop taking turns, and resume acting at a normal pace.
        </p>
      </Section>

      <Section header="Equipment">
        <Section header="Armor">
          <p>
            All armor has a Defense value. Each point of Defense on worn armor reduces
            <Crosslink target={linkMap.Attacks}>Threat</Crosslink> by 1 on all incoming
            <Crosslink target={linkMap.Attacks}>attacks</Crosslink>. Armor with Defense 1 can be concealed under or worn
            as casual clothing. Armor with Defense 3 is heavy and slows you down, actions and reactions do not provide
            free movement while you are wearing it.
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
            What you choose to attack with determines what <Crosslink target={linkMap.Gameplay}>metabolisms</Crosslink>
            are used to attack and defend. In general all attacks require
            <Metabolism fight />, and all reactions require <Metabolism flight />, unarmed combat uses
            <Metabolism self />, melee weapons use
            <Metabolism near />, and ranged weapons use <Metabolism far />.
          </p>
          <p>
            Each weapon has a Size value. This number indicates the amount of extra
            <Crosslink target={linkMap.Attacks}>Threat</Crosslink> added to attacks. It also indicates the minimum
            amount of Metabolism points that must be spent to attack with the weapon, if you do not have this amount
            available, you can only use this weapon with a desperate attack. Size 1 can be concealed in casual clothing,
            Size 2 cannot, and Size 3 or above requires both hands. Any weapon Size 4 or above requires a
            <Crosslink target={linkMap.TakingActionsAndReactions}>full action</Crosslink> to use and causes any
            reactions to it to become Default Risk instead of Low.
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
              When attacking with blunt weapons the defender uses the normal reaction, but the attacker can choose deal
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
              All blades deal 1 extra <Crosslink target={linkMap.Attacks}>Threat</Crosslink> above what their Size
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
    </Section>
  );
}

export default ChapterCombat;
